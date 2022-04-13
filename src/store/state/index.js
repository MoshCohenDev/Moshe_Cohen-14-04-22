const userInterface = {
  currentWeatherAndCondition: null,
  favoriteWeathers: [],
  daysForecast: null,
  isFavorite: false,
  darkMode: false,
};

export default function state(state = userInterface, action) {
  const { payload, type } = action;
  switch (type) {
    case "SET_CURRENT_CITY_AND_CONDITION":
      return { ...state, currentWeatherAndCondition: action.payload };
    case "ADD_TO_FAVORITE_WEATHER":
      return {
        ...state,
        favoriteWeathers: [...state.favoriteWeathers, payload],
      };
    case "SET_IS_FAVORITE":
      return {
        ...state,
        isFavorite: payload,
      };
    case "SET_IS_DARK":
      return {
        ...state,
        darkMode: payload,
      };
    case "SET_IS_METRIC":
      return {
        ...state,
        isMetric: payload,
      };
    case "REMOVE_FAVORITE_WEATHER":
      return {
        ...state,
        favoriteWeathers: action.payload,
      };
    case "SET_DAYS_FORECAST":
      return { ...state, daysForecast: action.payload };
    default:
      return state;
  }
}
