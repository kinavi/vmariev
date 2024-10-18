import { AxiosInstance } from 'axios';
import { token } from '../../Token';
import { NAVIGATION } from '../../../routs/constants';

export const middleware = (controller: AxiosInstance) => {
  controller.interceptors.request.use(
    async (config) => {
      const accessToken = await token.tryRefresh();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  controller.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status) {
        switch (error.response.status) {
          case 401: {
            token.removeAccessToken();
            window.location.assign(NAVIGATION.signIn);
            break;
          }
          case 440: {
            token.removeAccessToken();
            const accessToken = await token.tryRefresh();
            const config = error?.config;
            config._retry = true;
            if (!token) {
              window.location.assign(NAVIGATION.signIn);
              return;
            }
            config.headers.Authorization = `Bearer ${accessToken}`;
            return controller(config);
          }
          default:
            break;
        }
      }
      return Promise.reject(error?.response?.data);
    }
  );
};
