import { ApiController } from '../../../../ApiController';
import { ENDPOINTS } from '../../../../endpoints';
import {
  StartTrack200ResponseType,
  StartTrack240ResponseType,
  StartTrackBodyType,
  StopTrack200ResponseType,
  StopTrack240ResponseType,
  StoptTrackBodyType,
} from './types';

export class Track {
  controller;

  constructor(controller: ApiController) {
    this.controller = controller;
  }

  start = async (body: StartTrackBodyType) => {
    try {
      const { data } = await this.controller.post<
        StartTrack200ResponseType | StartTrack240ResponseType
      >(ENDPOINTS['time-manager'].track.start, body);
      if (data.status === 'error') {
        throw data;
      }
      if (data.status === 'ok') {
        return data.data || null;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  stop = async (body: StoptTrackBodyType) => {
    try {
      const { data } = await this.controller.put<
        StopTrack200ResponseType | StopTrack240ResponseType
      >(ENDPOINTS['time-manager'].track.stop, body);
      if (data.status === 'error') {
        throw data;
      }
      if (data.status === 'ok') {
        return data.data || null;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}
