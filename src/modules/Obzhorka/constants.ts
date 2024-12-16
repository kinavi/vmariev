import { UserProgramApiDataType } from '../../api/ApiService/domains/Objorka/UserProgram/types';

export const NAVIGATION = {
  welcome: '/obzhorka/welcome',
  signIn: '/obzhorka/signIn',
  signUp: '/obzhorka/signUp',
  main: '/obzhorka',
  profile: '/obzhorka/profile',
};

export const PFC_BY_GOAL: {
  [key in UserProgramApiDataType['goal']]: {
    proteins: {
      max: number;
      min: number;
    };
    fats: {
      max: number;
      min: number;
    };
    carbohydrates: {
      max: number;
      min: number;
    };
  };
} = {
  MASS_GAIN: {
    carbohydrates: {
      min: 40,
      max: 60,
    },
    proteins: {
      min: 25,
      max: 35,
    },
    fats: {
      min: 10,
      max: 15,
    },
  },
  NORMAL: {
    carbohydrates: {
      min: 30,
      max: 50,
    },
    proteins: {
      min: 25,
      max: 35,
    },
    fats: {
      min: 25,
      max: 35,
    },
  },
  WEIGHT_LOSS: {
    carbohydrates: {
      min: 10,
      max: 20,
    },
    proteins: {
      min: 40,
      max: 50,
    },
    fats: {
      min: 30,
      max: 40,
    },
  },
};
