import { ApiController } from '../../../../ApiController';
import { ENDPOINTS } from '../../../../endpoints';
import { ConfirmOffer200ResponseType } from '../../Auth/types';
import {
  CreateTask200ResponseType,
  CreateTask240ResponseType,
  CreateTaskBodyType,
  EditTask200ResponseType,
  EditTask240ResponseType,
  EditTaskBodyType,
  GetTask200ResponseType,
  GetTask240ResponseType,
  GetTasks200ResponseType,
  GetTasks240ResponseType,
  RemoveTask240ResponseType,
} from './types';

export class Task {
  controller;

  constructor(controller: ApiController) {
    this.controller = controller;
  }

  getAll = async () => {
    try {
      const { data } = await this.controller.get<
        GetTasks200ResponseType | GetTasks240ResponseType
      >(ENDPOINTS['time-manager'].task.getAll);
      if (data.status === 'error') {
        throw data;
      }
      if (data.status === 'ok') {
        return data.data || [];
      }
      return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  get = async (taskId: number) => {
    try {
      const { data } = await this.controller.get<
        GetTask200ResponseType | GetTask240ResponseType
      >(ENDPOINTS['time-manager'].task.get(taskId));
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

  create = async (body: CreateTaskBodyType) => {
    try {
      const { data } = await this.controller.post<
        CreateTask200ResponseType | CreateTask240ResponseType
      >(ENDPOINTS['time-manager'].task.create, body);
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

  edit = async (body: EditTaskBodyType) => {
    try {
      const { data } = await this.controller.put<
        EditTask200ResponseType | EditTask240ResponseType
      >(ENDPOINTS['time-manager'].task.create, body);
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

  remove = async (taskId: number) => {
    try {
      const { data } = await this.controller.delete<
        ConfirmOffer200ResponseType | RemoveTask240ResponseType
      >(ENDPOINTS['time-manager'].task.remove(taskId));
      if (data.status === 'error') {
        throw data;
      }
      if (data.status === 'ok') {
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
