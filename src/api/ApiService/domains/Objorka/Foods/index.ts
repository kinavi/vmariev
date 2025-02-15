import { ApiController } from '../../../../ApiController';
import { ENDPOINTS } from '../../../../endpoints';
import {
  CreateFood200ResponseType,
  CreateFood240ResponseType,
  CreateFoodBodyType,
  GetFood200ResponseType,
  GetFood240ResponseType,
  GetSavedFoods200ResponseType,
  GetSavedFoods240ResponseType,
  GetSavedFoodsQueryType,
  UpdateFood200ResponseType,
  UpdateFood240ResponseType,
  UpdateFoodBodyType,
} from './types';

export class Foods {
  private controller;

  constructor(controller: ApiController) {
    this.controller = controller;
  }

  loadSavedFoods = async () => {
    try {
      const { data } = await this.controller.get<
        GetSavedFoods200ResponseType | GetSavedFoods240ResponseType
      >(ENDPOINTS.objorka.foods.saved.get);
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      return data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  createFood = async (body: CreateFoodBodyType) => {
    try {
      const { data } = await this.controller.post<
        CreateFood200ResponseType | CreateFood240ResponseType
      >(ENDPOINTS.objorka.foods.saved.create, body);
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  loadFoodById = async (foodId: number) => {
    try {
      const { data } = await this.controller.get<
        GetFood200ResponseType | GetFood240ResponseType
      >(ENDPOINTS.objorka.foods.saved.getById(foodId));
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      return data.data || null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  updateFood = async (foodId: number, body: UpdateFoodBodyType) => {
    try {
      const { data } = await this.controller.put<
        UpdateFood200ResponseType | UpdateFood240ResponseType
      >(ENDPOINTS.objorka.foods.saved.getById(foodId), body);
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      return data.data || null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
