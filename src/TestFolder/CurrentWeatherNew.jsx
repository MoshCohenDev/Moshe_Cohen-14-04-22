import { React, useState } from "react";
import "./CurrentWeatherNew.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import actionStore from "../store/actionStore";
import Switch from "@mui/material/Switch";

import { useSelector, useDispatch } from "react-redux";

export default function CurrentWeatherNew({ data, type }) {
  const { currentConditions, name } = data;
  const [isMetric, setIsMetric] = useState(false);
  const [checked, setChecked] = useState(true);

  const { Temperature, WeatherText, WeatherIcon } = currentConditions;
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state);
  const { favoriteWeathers } = state;
  const removeFromFavorite = (data) => {
    console.log(data);
    const filteredItems = favoriteWeathers.filter(
      (item) => item.Key !== data.Key
    );
    dispatch(actionStore("REMOVE_FAVORITE_WEATHER", filteredItems));
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setIsMetric(!isMetric);
  };
  return (
    <div
      className={
        !currentConditions.IsDayTime
          ? "day shadow-md font-bold w-full pr-32 pl-32 p-4 text-black rounded-2xl flex text-center "
          : "night shadow-md pr-40 w-full  pl-40 p-4 text-white rounded-2xl text-center "
      }
    >
      <div>
        <p className="text-3xl mt-4 mb-2">{name}</p>
        <p className="text-2xl mb-6">
          {isMetric === true
            ? Temperature.Metric.Value
            : Temperature.Imperial.Value}
          °
        </p>
        <img
          className="weatherIcon"
          src={`https://developer.accuweather.com/sites/default/files/${WeatherIcon}-s.png`}
        ></img>
        {type === "favorite" ? (
          <IconButton
            onClick={() => removeFromFavorite(data)}
            aria-label="delete"
            size="large"
            color="primary"
            sx={{
              "& > p": {
                fontSize: [2, 3, 4],
              },
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        ) : (
          <Switch
            checked={checked}
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "controlled" }}
          />
        )}
      </div>
    </div>
  );
}
