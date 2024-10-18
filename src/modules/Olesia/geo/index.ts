// Константа для радиуса Земли в метрах
const EARTH_RADIUS = 6371000; // Радиус Земли в метрах

// Функция для преобразования градусов в радианы
function toRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

// Функция для вычисления расстояния между двумя точками по координатам
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = EARTH_RADIUS * c;
  return distance; // Расстояние в метрах
}

// Проверяем находится ли человек в радиусе 5 метров
export function isInRadius(
  userLat: number,
  userLon: number,
  targetLat: number,
  targetLon: number,
  radius = 5
) {
  const distance = getDistance(userLat, userLon, targetLat, targetLon);
  return distance <= radius;
}
