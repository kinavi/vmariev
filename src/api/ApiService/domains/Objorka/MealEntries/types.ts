import { paths, components } from '../../../../api-types';

export type GetMealEntries200ResponseType =
  paths['/api/glutton/mealEntries/']['get']['responses']['200']['content']['application/json'];
export type GetMealEntriesQueryType =
  paths['/api/glutton/mealEntries/']['get']['parameters']['query'];
export type GetMealEntries240ResponseType =
  paths['/api/glutton/mealEntries/']['get']['responses']['240']['content']['application/json'];

export type MealEntriesApiDataType = components['schemas']['def-9'];
