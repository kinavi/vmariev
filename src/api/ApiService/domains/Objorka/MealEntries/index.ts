import { ApiController } from '../../../../ApiController';
import { ENDPOINTS } from '../../../../endpoints';
import {
  GetMealEntries200ResponseType,
  GetMealEntries240ResponseType,
  GetMealEntriesQueryType,
} from './types';

export class MealEntries {
  private controller;

  constructor(controller: ApiController) {
    this.controller = controller;
  }

  getMealEntries = async (query: GetMealEntriesQueryType) => {
    try {
      const { data } = await this.controller.get<
        GetMealEntries200ResponseType | GetMealEntries240ResponseType
      >(ENDPOINTS.objorka.mealEntries.get(query));
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      return data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
}
