import getMonth from 'date-fns/getMonth';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import getDate from 'date-fns/getDate';

import { Status } from '../../../../../mobx/helpers/Status';
import { Track } from '../Track';
import { ApiService } from '../../../../../api/ApiService';
import { makeAutoObservable, runInAction } from 'mobx';
import { isAfter } from 'date-fns';

export class Calendar {
  status: Status;

  tracks: Track[] = [];

  targetDate: Date;

  targetDay: number | null;

  isShowCalendar = false;

  constructor(public taskId: number, public api: ApiService) {
    this.status = new Status();
    this.targetDate = new Date();
    this.targetDay = this.targetDate.getDate();
    makeAutoObservable(this);
  }

  get month() {
    return getMonth(this.targetDate);
  }

  get tracksOfDay() {
    return this.tracks
      .filter((item) => {
        const day = item.dateStart.getDate();
        return day === this.targetDay;
      })
      .sort((a, b) => (isAfter(a.dateStart, b.dateStart) ? -1 : 1));
  }

  get totalTracksTime() {
    return this.tracksOfDay.reduce(
      (acc, item) => +acc + item.getDeltaSeconds(),
      0
    );
  }

  toggleDay = (numberDay: number) => {
    this.targetDay = numberDay;
  };

  toggleToNextMonth = () => {
    this.targetDate = addMonths(this.targetDate, 1);
    this.targetDay = null;
    this.loadTrackOfMonth();
  };

  toggleToPreviousMonth = () => {
    this.targetDate = subMonths(this.targetDate, 1);
    this.targetDay = null;
    this.loadTrackOfMonth();
  };

  toggleIsShowCalendar = (value: boolean) => {
    this.isShowCalendar = value;
    if (value) {
      this.loadTrackOfMonth();
    }
  };

  getTimeByNumberDay = (numberDay: number) => {
    return this.tracks.reduce<number>((acc, item) => {
      const dayOfMonth = getDate(item.dateStart);
      if (dayOfMonth === numberDay) {
        return +acc + item.getDeltaSeconds();
      }
      return acc;
    }, 0);
  };

  loadTrackOfMonth = async () => {
    this.status.updateStatus('loading');
    const now = new Date();
    const year = now.getFullYear();
    const startOfMonth = new Date(year, this.month, 1);
    const endOfMonth = new Date(year, this.month + 1, 0);
    const { get } = this.api.domains.timeManager.track;
    const result = await get({
      taskId: this.taskId,
      startData: startOfMonth.toISOString(),
      endData: endOfMonth.toISOString(),
    });
    runInAction(() => {
      this.tracks = result.map((item) => new Track(item, this.api));
    });
    this.status.updateStatus('ready');
  };
}
