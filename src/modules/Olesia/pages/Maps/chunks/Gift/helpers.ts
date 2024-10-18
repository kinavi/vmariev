import { LocationType } from './types';

const degreesToRadians = (degrees: number) => degrees * (Math.PI / 180);
const radiansToDegrees = (radians: number) => radians * (180 / Math.PI);

const centralSubtendedAngle = (
  locationX: LocationType,
  locationY: LocationType
) => {
  const locationXLatRadians = degreesToRadians(locationX.latitude);
  const locationYLatRadians = degreesToRadians(locationY.latitude);
  return radiansToDegrees(
    Math.acos(
      Math.sin(locationXLatRadians) * Math.sin(locationYLatRadians) +
        Math.cos(locationXLatRadians) *
          Math.cos(locationYLatRadians) *
          Math.cos(
            degreesToRadians(
              Math.abs(locationX.longitude - locationY.longitude)
            )
          )
    )
  );
};

const earthRadius = 6371;
const greatCircleDistance = (angle: number) =>
  2 * Math.PI * earthRadius * (angle / 360);
export const distanceBetweenLocations = (
  locationX: LocationType,
  locationY: LocationType
) => greatCircleDistance(centralSubtendedAngle(locationX, locationY));

export const difDate = (targetDate: string) => {
  return new Date(targetDate).getTime() - new Date().getTime();
};
