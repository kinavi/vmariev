import { makeAutoObservable, runInAction } from 'mobx';
import { TaskDataType } from '../../../../../api/ApiService/domains/TimeManager/Task/types';
import { Track } from '../Track';
import { ApiService } from '../../../../../api/ApiService';
import { Status } from '../../../../../mobx/helpers/Status';
import { Calendar } from '../Calendar';

export class Task {
  status: Status;

  id;

  name;

  userId;

  createdAt;

  updatedAt;

  description;

  currentTrack;

  isReadonlyMode = true;

  limit: number = 2700000; // ms

  calendar: Calendar;

  initialTime;

  constructor(initialData: TaskDataType, public api: ApiService) {
    const {
      id,
      name,
      userId,
      createdAt,
      description,
      updatedAt,
      currentTrack,
      totalTime,
    } = initialData;
    this.status = new Status();
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.description = description;
    this.currentTrack = currentTrack ? new Track(currentTrack, this.api) : null;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.calendar = new Calendar(this.id, this.api);
    this.initialTime = totalTime / 1000;
    makeAutoObservable(this);
  }

  get activeTrack() {
    return this.currentTrack;
  }

  get totalTime() {
    return this.initialTime;
  }

  get playedTrack() {
    return this.currentTrack;
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
    const result = await start({ taskId: this.id, limit: this.limit });
    runInAction(() => {
      if (result) {
        const newTrack = new Track(result, this.api);
        this.currentTrack = newTrack;
      }
    });
    this.status.updateStatus('ready');
  };

  onStopTrack = async () => {
    if (!this.currentTrack) {
      return;
    }
    await this.currentTrack.onStop();
    const deltaTimeSeconds = this.currentTrack.getDeltaSeconds();
    if (deltaTimeSeconds >= this.currentTrack.limitSeconds) {
      this.initialTime += this.currentTrack.limitSeconds;
    } else {
      this.initialTime += deltaTimeSeconds;
    }
    this.currentTrack = null;
  };
}
