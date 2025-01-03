import { paths, components } from '../../../../api-types';

export type GetMealEntries200ResponseType =
  paths['/api/glutton/mealEntries/']['get']['responses']['200']['content']['application/json'];
export type GetMealEntriesQueryType =
  paths['/api/glutton/mealEntries/']['get']['parameters']['query'];
export type GetMealEntries240ResponseType =
  paths['/api/glutton/mealEntries/']['get']['responses']['240']['content']['application/json'];

export type CreateMealEntries200ResponseType =
  paths['/api/glutton/mealEntries/']['post']['responses']['200']['content']['application/json'];
export type CreateMealEntries240ResponseType =
  paths['/api/glutton/mealEntries/']['post']['responses']['240']['content']['application/json'];
export type CreateMealEntriesBodyType =
  paths['/api/glutton/mealEntries/']['post']['requestBody']['content']['application/json'];

export type MealEntriesApiDataType =
  GetMealEntries200ResponseType['data'][number];
