import { makeAutoObservable } from 'mobx';
import { AuthType } from './types';
import { memFetchRefreshToken } from './fetchRefreshToken';

const REFRESH_TOKEN_COOKE_KEY = 'gxx';
const USER_DATA_KEY = 'g23yt';

// TODO: нужна шифровка данных пользователя
// TODO: надо расширить данные данными протухания токена и настроить преждевременно бновление, если токен близок к протуханию
export class TokenController {
  accessToken: string | null = null;

  refreshToken: string | null = null;

  userData: AuthType['user'] | null = null;

  constructor() {
    makeAutoObservable(this);
    this.load();
  }

  save = (authData: AuthType) => {
    this.accessToken = authData.access_token;
    this.refreshToken = authData.refresh_token;
    this.userData = authData.user;
    sessionStorage.setItem(REFRESH_TOKEN_COOKE_KEY, authData.refresh_token);
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(authData.user));
  };

  load = async () => {
    const refreshToken = sessionStorage.getItem(REFRESH_TOKEN_COOKE_KEY);
    const _user = localStorage.getItem(USER_DATA_KEY);
    if (!refreshToken || !_user) {
      this.clear();
      return;
    }
    const user = JSON.parse(_user);
    this.refreshToken = refreshToken;
    this.userData = user;
  };

  clear = () => {
    sessionStorage.removeItem(REFRESH_TOKEN_COOKE_KEY);
    localStorage.removeItem(USER_DATA_KEY);
  };

  tryRefresh = async () => {
    this.load();
    // TODO: Нужна проверка время жизни токена
    if (this.accessToken) {
      return this.accessToken;
    }
    const refreshToken = this.refreshToken;

    if (!refreshToken || !this.userData?.email) {
      this.clear();
      return null;
    }

    const result = await memFetchRefreshToken(
      refreshToken,
      this.userData?.email
    );

    if (!result) {
      return null;
    }

    this.save(result.data);
    return result.data.access_token;
  };

  removeAccessToken = () => {
    this.accessToken = null;
  };
}
