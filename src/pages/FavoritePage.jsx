import React from "react";
import { useSelector } from "react-redux";

import FavoriteWeatherCard from "../components/FavoritePage/FavoriteWeatherCard";
function FavoritePage() {
  const { state } = useSelector((state) => state);
  const { darkMode } = state;
  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="flex-col justify-center mt-20 text-center">
        <p className="text-5xl mb-10">My Favorite Weather</p>
        <div className="flex justify-center  text-center">
          {state.favoriteWeathers &&
            state.favoriteWeathers.map((favoriteWeather) => {
              return (
                <div key={favoriteWeather}>
                  {/* <CurrentWeatherNew data={favoriteWeather} type={"favorite"} /> */}
                  <FavoriteWeatherCard data={favoriteWeather} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FavoritePage;
