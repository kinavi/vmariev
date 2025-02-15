import { paths, components } from '../../../../api-types';

export type GetSavedDishesQueryType =
  paths['/api/glutton/dishes/saved']['get']['parameters']['query'];
export type GetSavedDishes200ResponseType =
  paths['/api/glutton/dishes/saved']['get']['responses']['200']['content']['application/json'];
export type GetSavedDishes240ResponseType =
  paths['/api/glutton/dishes/saved']['get']['responses']['240']['content']['application/json'];

export type CreateDish200ResponseType =
  paths['/api/glutton/dishes/saved']['post']['responses']['200']['content']['application/json'];
export type CreateDish240ResponseType =
  paths['/api/glutton/dishes/saved']['post']['responses']['240']['content']['application/json'];
export type CreateDishBodyType =
  paths['/api/glutton/dishes/saved']['post']['requestBody']['content']['application/json'];

export type UpdateDish200ResponseType =
  paths['/api/glutton/dishes/saved/{id}']['put']['responses']['200']['content']['application/json'];
export type UpdateDish240ResponseType =
  paths['/api/glutton/dishes/saved/{id}']['put']['responses']['240']['content']['application/json'];
export type UpdateDishBodyType =
  paths['/api/glutton/dishes/saved/{id}']['put']['requestBody']['content']['application/json'];

export type GetDish200ResponseType =
  paths['/api/glutton/dishes/saved/{id}']['get']['responses']['200']['content']['application/json'];
export type GetDish240ResponseType =
  paths['/api/glutton/dishes/saved/{id}']['get']['responses']['240']['content']['application/json'];

export type DishApiDataType = GetSavedDishes200ResponseType['data'][number];
