import { makeAutoObservable, runInAction } from 'mobx';
import { TrackDataType } from '../../../../../api/ApiService/domains/TimeManager/Track/types';
import { ApiService } from '../../../../../api/ApiService';
import { Status } from '../../../../../mobx/helpers/Status';

export class Track {
  status: Status;

  id;

  dateStart;

  dateStop;

  constructor(initialData: TrackDataType, public api: ApiService) {
    const { dateStart, id, dateStop } = initialData;
    this.status = new Status();
    this.id = id;
    this.dateStart = new Date(dateStart);
    this.dateStop = dateStop ? new Date(dateStop) : null;
    makeAutoObservable(this);
  }

  onStop = async () => {
    this.status.updateStatus('loading');
    const { stop } = this.api.domains.timeManager.track;
    const result = await stop({ id: this.id });
    runInAction(() => {
      if (result) {
        this.dateStart = new Date(result.dateStart);
        this.dateStop = result.dateStop ? new Date(result.dateStop) : null;
      }
    });
    this.status.updateStatus('ready');
  };
}
