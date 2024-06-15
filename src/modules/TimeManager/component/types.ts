import { Track } from '../mobx/models/Track';

export type TrackPropsType = {
  limit?: number;
  value: Track;
};

export interface ITimerContext {
  value: number;
}
