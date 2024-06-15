import { makeAutoObservable, runInAction } from 'mobx';
import { TaskDataType } from '../../../../../api/ApiService/domains/TimeManager/Task/types';
import { Track } from '../Track';
import { ApiService } from '../../../../../api/ApiService';
import { Status } from '../../../../../mobx/helpers/Status';
import moment from 'moment';

export class Task {
  status: Status;

  id;

  name;

  userId;

  createdAt;

  updatedAt;

  description;

  tracks;

  isReadonlyMode = true;

  constructor(initialData: TaskDataType, public api: ApiService) {
    const { id, name, userId, createdAt, description, tracks, updatedAt } =
      initialData;
    this.status = new Status();
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.description = description;
    this.tracks = tracks?.map((item) => new Track(item, this.api)) || [];
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    makeAutoObservable(this);
  }

  get totalTime() {
    return this.tracks.reduce<number>((acc, item) => {
      const deltaTime =
        moment(item.dateStop || undefined).diff(moment(item.dateStart), 's') ||
        0;
      return +acc + deltaTime;
    }, 0);
  }

  updateName = (name: string) => {
    this.name = name;
  };

  toggleIsreadonly = (value: boolean) => {
    this.isReadonlyMode = value;
  };

  onStartTrack = async () => {
    this.status.updateStatus('loading');
    const { start } = this.api.domains.timeManager.track;
    const result = await start({ taskId: this.id });
    runInAction(() => {
      if (result) {
        const newTrack = new Track(result, this.api);
        this.tracks.push(newTrack);
      }
    });
    this.status.updateStatus('ready');
  };
}
