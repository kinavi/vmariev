import { makeAutoObservable, runInAction } from 'mobx';
import { TrackDataType } from '../../../../../api/ApiService/domains/TimeManager/Track/types';
import { ApiService } from '../../../../../api/ApiService';
import { Status } from '../../../../../mobx/helpers/Status';
import moment from 'moment';

export class Track {
  status: Status;

  id;

  dateStart;

  dateStop;

  limit;

  constructor(initialData: TrackDataType, public api: ApiService) {
    const { dateStart, id, dateStop, limit } = initialData;
    this.status = new Status();
    this.id = id;
    this.dateStart = new Date(dateStart);
    this.dateStop = dateStop ? new Date(dateStop) : null;
    this.limit = limit;

    makeAutoObservable(this);
  }

  get limitSeconds() {
    return this.limit / 1000;
  }

  getDeltaSeconds = () => {
    const delta =
      moment(this.dateStop || undefined).diff(moment(this.dateStart), 's') || 0;
    if (delta > this.limitSeconds) {
      return this.limitSeconds;
    }
    return delta;
  };

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
