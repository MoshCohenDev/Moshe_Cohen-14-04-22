import { React, useState } from "react";
import actionStore from "../../../store/actionStore";
import Switch from "@mui/material/Switch";
// import "./HomeWeatherCard.scss";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function HomeWeatherCard({ data }) {
  const [isMetric, setIsMetric] = useState(false);
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state);
  const { favoriteWeathers, isFavorite, darkMode } = state;
  const { currentConditions, name } = data;
  const { Temperature, WeatherText, WeatherIcon } = currentConditions;

  const removeFromFavorite = (data) => {
    const filteredItems = favoriteWeathers.filter(
      (item) => item.Key !== data.Key
    );

    dispatch(actionStore("REMOVE_FAVORITE_WEATHER", filteredItems));
    dispatch(actionStore("SET_IS_FAVORITE", false));
  };
  const setToFavoriteList = async (favoriteWeather) => {
    favoriteWeather.isFavorite = true;
    dispatch(actionStore("SET_IS_FAVORITE", true));
    dispatch(
      actionStore("ADD_TO_FAVORITE_WEATHER", {
        ...favoriteWeather,
      })
    );
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setIsMetric(!isMetric);
  };

  return (
    // <div className={!currentConditions.IsDayTime ? "day  " : "night "}>
    <Card
      sx={{
        width: "100%",
        padding: 4,
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
      }}
      style={
        darkMode
          ? {}
          : {
              backgroundColor: "rgba(0, 0, 0, 0.746)",
              color: "white",
            }
      }
    >
      <div className="flex justify-between">
        <CardHeader
          className="font-bold text-base"
          title={name}
          subheader={WeatherText}
        />
        <div className="mt-2">
          {isFavorite ? (
            <IconButton
              onClick={() => removeFromFavorite(data)}
              aria-label="add to favorites"
            >
              <FavoriteIcon sx={{ color: "red", fontSize: "2rem" }} />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setToFavoriteList(data)}
              aria-label="add to favorites"
            >
              <FavoriteIcon sx={{ fontSize: "2rem", color: "white" }} />
            </IconButton>
          )}
        </div>
      </div>
      <CardContent className="font-bold text-3xl text-center">
        {isMetric === true
          ? Temperature.Metric.Value
          : Temperature.Imperial.Value}
        ° C
      </CardContent>
      <div className="flex justify-center">
        <img
          className="animate-pulse"
          src={`https://developer.accuweather.com/sites/default/files/${WeatherIcon}-s.png`}
        ></img>
      </div>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Switch
          checked={checked}
          onChange={handleChange}
          color="default"
          inputProps={{ "aria-label": "controlled" }}
        />
      </CardActions>
    </Card>
    // </div>
  );
}
