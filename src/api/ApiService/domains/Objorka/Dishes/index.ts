import { ApiController } from '../../../../ApiController';
import { ENDPOINTS } from '../../../../endpoints';
import {
  CreateDish200ResponseType,
  CreateDish240ResponseType,
  CreateDishBodyType,
  GetDish200ResponseType,
  GetDish240ResponseType,
  GetSavedDishes200ResponseType,
  GetSavedDishes240ResponseType,
  GetSavedDishesQueryType,
  UpdateDish200ResponseType,
  UpdateDish240ResponseType,
  UpdateDishBodyType,
} from './types';

export class Dishes {
  private controller;

  constructor(controller: ApiController) {
    this.controller = controller;
  }

  loadSavedList = async (query: GetSavedDishesQueryType) => {
    try {
      const { data } = await this.controller.get<
        GetSavedDishes200ResponseType | GetSavedDishes240ResponseType
      >(ENDPOINTS.objorka.dishes.saved.get(query));
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      return data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  create = async (body: CreateDishBodyType) => {
    try {
      const { data } = await this.controller.post<
        CreateDish200ResponseType | CreateDish240ResponseType
      >(ENDPOINTS.objorka.dishes.saved.create, body);
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  update = async (dishId: number, body: UpdateDishBodyType) => {
    try {
      const { data } = await this.controller.put<
        UpdateDish200ResponseType | UpdateDish240ResponseType
      >(ENDPOINTS.objorka.dishes.saved.getById(dishId), body);
      if (data.status === 'error') {
        throw new Error(data.message);
      }
      return data.data || null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  loadFoodById = async (foodId: number) => {
    try {
      const { data } = await this.controller.get<
        GetDish200ResponseType | GetDish240ResponseType
      >(ENDPOINTS.objorka.dishes.saved.getById(foodId));
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
