import { paths, components } from '../../../../api-types';

export type GetSavedFoodsQueryType =
  paths['/api/glutton/foods/saved']['get']['parameters']['query'];
export type GetSavedFoods200ResponseType =
  paths['/api/glutton/foods/saved']['get']['responses']['200']['content']['application/json'];
export type GetSavedFoods240ResponseType =
  paths['/api/glutton/foods/saved']['get']['responses']['240']['content']['application/json'];

export type CreateFood200ResponseType =
  paths['/api/glutton/foods/saved']['post']['responses']['200']['content']['application/json'];
export type CreateFood240ResponseType =
  paths['/api/glutton/foods/saved']['post']['responses']['240']['content']['application/json'];
export type CreateFoodBodyType =
  paths['/api/glutton/foods/saved']['post']['requestBody']['content']['application/json'];

export type GetFood200ResponseType =
  paths['/api/glutton/foods/saved/{id}']['get']['responses']['200']['content']['application/json'];
export type GetFood240ResponseType =
  paths['/api/glutton/foods/saved/{id}']['get']['responses']['240']['content']['application/json'];

export type UpdateFood200ResponseType =
  paths['/api/glutton/foods/saved/{id}']['put']['responses']['200']['content']['application/json'];
export type UpdateFood240ResponseType =
  paths['/api/glutton/foods/saved/{id}']['put']['responses']['240']['content']['application/json'];
export type UpdateFoodBodyType =
  paths['/api/glutton/foods/saved/{id}']['put']['requestBody']['content']['application/json'];

export type FoodApiDataType = GetSavedFoods200ResponseType['data'][number];
