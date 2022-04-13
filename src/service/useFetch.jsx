// import { React, useEffect, useState } from "react";
// // import actionStore from "../store/actionStore";
// // import { getCurrentConditions, getLocationForecastName } from "./apiLocal";
// import { locaLeButtonFetch } from "./getYourLocation";
// // import { useDispatch, useSelector } from "react-redux";
// import { filterCityDaysAndTemperature } from "./logic";

// const useFetch = (defaultCity) => {
//   // const dataRsr = usePosition();
//   const dispatch = useDispatch();
//   const [data, setData] = useState(null);
//   const { state } = useSelector((state) => state);

//   const setCityCurrent = async (Key, name) => {
//     const days = await getLocationForecastName(Key);
//     const currentConditions = getCurrentConditions(Key);
//     const newData = {
//       Key,
//       name,
//       isFavorite: false,
//       currentConditions: currentConditions[0],
//     };

//     dispatch(actionStore("SET_CURRENT_CITY_AND_CONDITION", newData));
//     const daysForecast = await filterCityDaysAndTemperature({
//       days,
//       name: name,
//       key: Key,
//     });
//     dispatch(actionStore("SET_CURRENT_DAYS", daysForecast));
//     return { daysForecast, newData };
//   };
//   useEffect(async () => {
//     if (state.currentWeatherAndCondition) {
//       setData(state.currentWeatherAndCondition);
//       return { data };
//     }
//     let Key;
//     let name;
//     let location = await locaLeButtonFetch();
//     if (location) {
//       Key = location.Key;
//       name = location.AdministrativeArea.LocalizedName;
//     } else {
//       Key = defaultCity.Key;
//       name = defaultCity.name;
//     }
//     const res = await setCityCurrent(Key, name);
//     setData(res);
//   }, []);
//   return { data };
// };
// export default useFetch;
