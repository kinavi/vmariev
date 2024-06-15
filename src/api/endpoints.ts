import { stringify } from 'qs';

export const ENDPOINTS = {
  auth: {
    signUp: '/api/auth/signUp',
    signIn: '/api/auth/signIn',
    refreshToken: '/api/auth/refreshToken',
    createOffer: '/api/offers/create',
    confirmOffer: '/api/offers/confirm',
  },
  offer: {
    create: '/api/offers/create',
    confirm: '/api/offers/confirm',
  },
  'time-manager': {
    track: {
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
};
