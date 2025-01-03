import { stringify } from 'qs';

export const ENDPOINTS = {
  auth: {
    signUp: '/api/auth/signUp',
    signIn: '/api/auth/signIn',
    refreshToken: '/api/auth/refreshToken',
    createOffer: '/api/offers/create',
    confirmOffer: '/api/offers/confirm',
    checkOffer: <T>(query: T) =>
      `/api/offers/check${stringify(query, { addQueryPrefix: true })}`,
  },
  offer: {
    create: '/api/offers/create',
    confirm: '/api/offers/confirm',
  },
  'time-manager': {
    track: {
      get: <T>(query: T) =>
        `/api/manager/time/tracks/${stringify(query, {
          addQueryPrefix: true,
        })}`,
      start: '/api/manager/time/tracks/start',
      stop: '/api/manager/time/tracks/stop',
    },
    task: {
      create: '/api/manager/time/tasks',
      remove: (taskId: number) =>
        `/api/manager/time/tasks${stringify(
          { id: taskId },
          { addQueryPrefix: true }
        )}`,
      edit: '/api/manager/time/tasks',
      getAll: '/api/manager/time/tasks',
      get: (taskId: number) => `/api/manager/time/tasks${taskId}`,
    },
  },
  objorka: {
    userProgram: {
      create: '/api/glutton/userProgram',
      get: (userId: number) => `/api/glutton/userProgram/user/${userId}`,
    },
    mealEntries: {
      create: '/api/glutton/mealEntries/',
      get: <T>(query: T) =>
        `/api/glutton/mealEntries/${stringify(query, {
          addQueryPrefix: true,
        })}`,
    },
    foods: {
      saved: {
        get: '/api/glutton/foods/saved',
        create: '/api/glutton/foods/saved',
        getById: (foodId: number) => `/api/glutton/foods/saved/${foodId}`,
        update: (foodId: number) => `/api/glutton/foods/saved/${foodId}`,
      },
    },
    dishes: {
      saved: {
        get: '/api/glutton/dishes/saved',
        create: '/api/glutton/dishes/saved',
        getById: (foodId: number) => `/api/glutton/dishes/saved/${foodId}`,
        update: (foodId: number) => `/api/glutton/dishes/saved/${foodId}`,
      },
    },
  },
};
