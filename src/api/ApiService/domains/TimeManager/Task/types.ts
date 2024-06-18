import { paths } from '../../../../api-types';

export type GetTasks200ResponseType =
  paths['/api/manager/time/tasks/']['get']['responses']['200']['content']['application/json'];
export type GetTasks240ResponseType =
  paths['/api/manager/time/tasks/']['get']['responses']['240']['content']['application/json'];

export type GetTask200ResponseType =
  paths['/api/manager/time/tasks/{id}']['get']['responses']['200']['content']['application/json'];
export type GetTask240ResponseType =
  paths['/api/manager/time/tasks/{id}']['get']['responses']['240']['content']['application/json'];

export type CreateTask200ResponseType =
  paths['/api/manager/time/tasks/']['post']['responses']['200']['content']['application/json'];
export type CreateTask240ResponseType =
  paths['/api/manager/time/tasks/']['post']['responses']['240']['content']['application/json'];

export type CreateTaskBodyType =
  paths['/api/manager/time/tasks/']['post']['requestBody']['content']['application/json'];

export type EditTask200ResponseType =
  paths['/api/manager/time/tasks/']['put']['responses']['200']['content']['application/json'];
export type EditTask240ResponseType =
  paths['/api/manager/time/tasks/']['put']['responses']['240']['content']['application/json'];

export type EditTaskBodyType =
  paths['/api/manager/time/tasks/']['put']['requestBody']['content']['application/json'];

export type RemoveTask200ResponseType =
  paths['/api/manager/time/tasks/']['delete']['responses']['200']['content']['application/json'];
export type RemoveTask240ResponseType =
  paths['/api/manager/time/tasks/']['delete']['responses']['240']['content']['application/json'];

export type TaskDataType = GetTasks200ResponseType['data'][number];
