import axios, { AxiosRequestConfig } from 'axios';
import { IApiController, IApiControllerConfig } from './types';
import { middleware } from './middlewares';

export class ApiController {
  private controller: IApiController;
  constructor(baseURL: string) {
    const instance = axios.create({
      baseURL,
      withCredentials: true,
    });
    middleware(instance);
    this.controller = {
      instance,
      CancelToken: axios.CancelToken,
      isCancel: axios.isCancel,
    };
  }

  get<T>(url: string, conf: IApiControllerConfig = {}) {
    return this.controller.instance.get<T>(url, conf);
  }

  delete<T>(url: string, conf: AxiosRequestConfig = {}) {
    return this.controller.instance.delete<T>(url, conf);
  }

  head<T>(url: string, conf: AxiosRequestConfig = {}) {
    return this.controller.instance.head<T>(url, conf);
  }

  options<T>(url: string, conf: AxiosRequestConfig = {}) {
    return this.controller.instance.options<T>(url, conf);
  }

  post<T>(url: string, data = {}, conf: AxiosRequestConfig = {}) {
    return this.controller.instance.post<T>(url, data, conf);
  }

  put<T>(url: string, data = {}, conf: AxiosRequestConfig = {}) {
    return this.controller.instance.put<T>(url, data, conf);
  }

  patch<T>(url: string, data = {}, conf: AxiosRequestConfig = {}) {
    return this.controller.instance.patch<T>(url, data, conf);
  }

  cancelToken() {
    return this.controller.CancelToken;
  }

  isCancel() {
    return this.controller.isCancel;
  }
}
