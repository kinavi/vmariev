import { ApiController } from '../../../../ApiController';
import { ENDPOINTS } from '../../../../endpoints';
import {
  CreateUserProgram200ResponseType,
  CreateUserProgram240ResponseType,
  CreateUserProgramBodyType,
  UserProgram200ResponseType,
  UserProgram240ResponseType,
} from './types';

export class UserProgram {
  private controller;

  constructor(controller: ApiController) {
    this.controller = controller;
  }

  getUserProgram = async (userId: number) => {
    try {
      const { data } = await this.controller.get<
        UserProgram200ResponseType | UserProgram240ResponseType
      >(ENDPOINTS.objorka.userProgram.get(userId));
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  createUserProgram = async (body: CreateUserProgramBodyType) => {
    try {
      const { data } = await this.controller.post<
        CreateUserProgram200ResponseType | CreateUserProgram240ResponseType
      >(ENDPOINTS.objorka.userProgram.create, body);
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
