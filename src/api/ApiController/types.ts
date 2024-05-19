import { AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios';

export interface IApiController {
  instance: AxiosInstance;
  CancelToken: AxiosStatic['CancelToken'];
  isCancel: AxiosStatic['isCancel'];
}

export interface IApiControllerConfig extends AxiosRequestConfig {
  headers?: { [key: string]: string };
  params?: { [key: string]: any };
  data?: { [key: string]: any };
  [key: string]: any;
}
