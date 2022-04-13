import { React, useEffect } from "react";
import actionStore from "../store/actionStore";
import DaysCards from "../components/HomePage/DaysCards/DaysCards";
import { useSelector, useDispatch } from "react-redux";
import Search from "../components/HomePage/Search";
import { getCurrentWeather } from "../service/setDefaultCity";
import HomeWeatherCard from "../components/HomePage/HomeWeatherCard/HomeWeatherCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const defaultCity = {
  name: "Tel Aviv",
  Key: "215854",
};

const HomePage = () => {
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state);
  const { currentWeatherAndCondition, daysForecast, darkMode } = state;

  useEffect(async () => {
    if (currentWeatherAndCondition) {
      return { currentWeatherAndCondition, daysForecast };
    } else {
      const { daysForecast, currentWeather } = await getCurrentWeather(
        defaultCity
      );
      dispatch(actionStore("SET_CURRENT_CITY_AND_CONDITION", currentWeather));
      dispatch(actionStore("SET_DAYS_FORECAST", daysForecast));
    }
  }, []);

  return (
    <div className={darkMode ? "dark w-full" : "light w-full"}>
      <header className="text-center sm:text-6xl text-3xl">Weather app</header>
      <Search />
      <div className="grid justify-center mt-10 ">
        {currentWeatherAndCondition && (
          <HomeWeatherCard data={currentWeatherAndCondition} />
        )}
        {daysForecast ? (
          <DaysCards />
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        )}
      </div>
    </div>
  );
};
export default HomePage;
