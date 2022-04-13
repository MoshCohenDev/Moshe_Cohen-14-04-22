import { getLocationByGeoPosition } from "./apiServices";

function getLongAndLat() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
}
export const locaLeButtonFetch = async () => {
  try {
    let position = await getLongAndLat(),
      { latitude, longitude } = position.coords;
    const cityCurrent = await getLocationByGeoPosition({
      latitude: latitude,
      longitude: longitude,
    });
    return cityCurrent;
  } catch (e) {
    return null;
  }
};
