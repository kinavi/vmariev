import { paths } from '../../../api-types';

export type SignIn200ResponseType =
  paths['/api/auth/signIn']['post']['responses']['200']['content']['application/json'];
export type SignIn400ResponseType =
  paths['/api/auth/signIn']['post']['responses']['400']['content']['application/json'];
export type SignInBodyType =
  paths['/api/auth/signIn']['post']['requestBody']['content']['application/json'];

export type SignUp200ResponseType =
  paths['/api/auth/signUp']['post']['responses']['200']['content']['application/json'];
export type SignUp250ResponseType =
  paths['/api/auth/signUp']['post']['responses']['250']['content']['application/json'];
export type SignUpBodyType =
  paths['/api/auth/signUp']['post']['requestBody']['content']['application/json'];

export type CreateOffer200ResponseType =
  paths['/api/offers/create']['post']['responses']['200']['content']['application/json'];
export type CreateOffer400ResponseType =
  paths['/api/offers/create']['post']['responses']['240']['content']['application/json'];

export type CreateOfferBodyType =
  paths['/api/offers/create']['post']['requestBody']['content']['application/json'];

export type ConfirmOfferBodyType =
  paths['/api/offers/confirm']['put']['requestBody']['content']['application/json'];

export type ConfirmOffer200ResponseType =
  paths['/api/offers/confirm']['put']['responses']['200']['content']['application/json'];
export type ConfirmOffer400ResponseType =
  paths['/api/offers/confirm']['put']['responses']['240']['content']['application/json'];
