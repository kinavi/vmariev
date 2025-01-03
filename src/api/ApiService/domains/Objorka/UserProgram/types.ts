import { paths, components } from '../../../../api-types';

export type UserProgram200ResponseType =
  paths['/api/glutton/userProgram/user/{userId}']['get']['responses']['200']['content']['application/json'];
export type UserProgram240ResponseType =
  paths['/api/glutton/userProgram/user/{userId}']['get']['responses']['240']['content']['application/json'];

export type CreateUserProgram200ResponseType =
  paths['/api/glutton/userProgram/']['post']['responses']['200']['content']['application/json'];
export type CreateUserProgramBodyType =
  paths['/api/glutton/userProgram/']['post']['requestBody']['content']['application/json'];
export type CreateUserProgram240ResponseType =
  paths['/api/glutton/userProgram/']['post']['responses']['240']['content']['application/json'];

export type UserProgramApiDataType = UserProgram200ResponseType['data'];
