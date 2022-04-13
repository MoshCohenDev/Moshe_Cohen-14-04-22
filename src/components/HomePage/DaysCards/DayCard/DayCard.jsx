import React from "react";
import {
  styled,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import { useSelector } from "react-redux";

function DayCard({ data }) {
  const { state } = useSelector((state) => state);
  const { darkMode } = state;
  return (
    <Card
      style={
        darkMode
          ? {
              backgroundColor: "white",
              maxWidth: 400,
              padding: 2,
              height: "100%",
              textAlign: "left",
              borderRadius: 20,
            }
          : {
              backgroundColor: "rgba(0, 0, 0, 0.746)",
              maxWidth: 400,
              padding: 2,
              color: "white",
              height: "100%",
              textAlign: "left",
              marginLeft: "5px",
              borderRadius: 20,
            }
      }
    >
      <CardHeader className="font-bold text-base" title={data.dayWeeks} />
      <CardHeader className="font-bold text-base" title={data.date}>
        {data.month}
      </CardHeader>

      <CardContent className="font-bold text-xl text-center">
        min :{data.min} C
      </CardContent>
      <CardContent className="font-bold text-xl text-center">
        max :{data.max} C
      </CardContent>
      <div className="flex justify-center">
        <img
          className="animate-pulse"
          src={`https://developer.accuweather.com/sites/default/files/${data.day.Icon}-s.png`}
        ></img>
      </div>
    </Card>
  );
}

export default DayCard;
