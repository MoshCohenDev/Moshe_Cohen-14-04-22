import { React } from 'react';
import DayCard from './DayCard/DayCard';
import { useSelector } from 'react-redux';

function DaysCards() {
	const { state } = useSelector((state) => state);
	return (
		<div className="sm:flex flex-row mt-10 mb-40 sm:justify-between ">
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
