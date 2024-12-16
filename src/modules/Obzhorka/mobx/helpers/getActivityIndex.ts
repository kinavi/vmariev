import { UserProgramApiDataType } from '../../../../api/ApiService/domains/Objorka/UserProgram/types';

export const getActivityIndex = (
  physicalActivity: UserProgramApiDataType['physicalActivity']
) => {
  switch (physicalActivity) {
    case 'LOW':
      return 1.2;
    case 'LIGHT':
      return 1.375;
    case 'MIDDLE':
      return 1.55;
    case 'HIGH':
      return 1.7;
    case 'EXTREME':
      return 1.9;
    default:
      return 1;
  }
};
