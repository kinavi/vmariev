import { paths } from '../api-types';

export type AuthType =
  paths['/api/auth/signIn']['post']['responses']['200']['content']['application/json']['data'];

export type TokenRefreshBodyType =
  paths['/api/auth/refreshToken']['post']['requestBody']['content']['application/json'];

export type TokenRefreshResponsesType =
  paths['/api/auth/refreshToken']['post']['responses']['200']['content']['application/json'];
