import { React, useEffect } from "react";
import DayCard from "./DayCard/DayCard";
import { useSelector } from "react-redux";

function DaysCards() {
  const { state } = useSelector((state) => state);
  return (
    <div className="flex mt-10 mb-40 justify-evenly">
      {state.daysForecast &&
        state.daysForecast.map((DaysCards) => {
          return (
            <div key={DaysCards.date}>
              <DayCard data={DaysCards} />
            </div>
          );
        })}
    </div>
  );
}

export default DaysCards;
