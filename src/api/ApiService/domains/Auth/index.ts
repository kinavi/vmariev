import { ApiController } from '../../../ApiController';
import { ENDPOINTS } from '../../../endpoints';
import {
  SignInBodyType,
  SignIn200ResponseType,
  SignIn400ResponseType,
  SignUpBodyType,
  CreateOfferBodyType,
  CreateOffer200ResponseType,
  CreateOffer400ResponseType,
  ConfirmOfferBodyType,
  ConfirmOffer200ResponseType,
  ConfirmOffer240ResponseType,
  SignUp200ResponseType,
  SignUp250ResponseType,
  CheckOffer200ResponseType,
  CheckOffer240ResponseType,
} from './types';

export class Auth {
  constructor(public controller: ApiController) {}

  signIn = async (
    body: SignInBodyType
  ): Promise<SignIn200ResponseType | SignIn400ResponseType> => {
    try {
      const { data } = await this.controller.post<
        SignIn200ResponseType | SignIn400ResponseType
      >(ENDPOINTS.auth.signIn, body);
      if (data.status === 'error') {
        return data;
      }
      return data;
    } catch (error) {
      console.error(error);
      return { status: 'error', message: 'Что-то пошло не так' };
    }
  };

  signUp = async (
    body: SignUpBodyType
  ): Promise<SignUp200ResponseType | SignUp250ResponseType> => {
    try {
      const { data } = await this.controller.post<
        SignUp200ResponseType | SignUp250ResponseType
      >(ENDPOINTS.auth.signUp, body);
      if (data.status === 'error') {
        return data;
      }
      return data;
    } catch (error) {
      console.error(error);
      return { status: 'error', message: 'Что-то пошло не так' };
    }
  };

  createOffer = async (
    body: CreateOfferBodyType
  ): Promise<CreateOffer200ResponseType | CreateOffer400ResponseType> => {
    try {
      const { data } = await this.controller.post<
        CreateOffer200ResponseType | CreateOffer400ResponseType
      >(ENDPOINTS.auth.createOffer, body);
      if (data.status === 'error') {
        return data;
      }
      return data;
    } catch (error) {
      console.error(error);
      return { status: 'error', message: 'Что-то пошло не так' };
    }
  };

  confirmOffer = async (
    body: ConfirmOfferBodyType
  ): Promise<ConfirmOffer200ResponseType | ConfirmOffer240ResponseType> => {
    try {
      const { data } = await this.controller.post<
        ConfirmOffer200ResponseType | ConfirmOffer240ResponseType
      >(ENDPOINTS.auth.confirmOffer, body);
      if (data.status === 'error') {
        return data;
      }
      return data;
    } catch (error) {
      console.error(error);
      return { status: 'error', message: 'Что-то пошло не так' };
    }
  };

  check = async (params: {
    email: string;
    code: number;
  }): Promise<CheckOffer200ResponseType | CheckOffer240ResponseType> => {
    try {
      console.log('params', params, ENDPOINTS.auth.checkOffer(params));
      const { data } = await this.controller.get<
        CheckOffer200ResponseType | CheckOffer240ResponseType
      >(ENDPOINTS.auth.checkOffer(params));
      if (data.status === 'error') {
        return data;
      }
      return data;
    } catch (error) {
      console.error(error);
      return { status: 'error', message: 'Что-то пошло не так' };
    }
  };
}
