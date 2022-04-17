import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';
import { useSelector } from 'react-redux';

function DayCard({ data }) {
	const { state } = useSelector((state) => state);

	return (
		<Card
			className="sm:px-8 px-2 pt-2 sm:pb-0 min-w-max text-center sm:block flex sm:justify-center  justify-between items-center mb-6  "
			style={{
				height: '100%',
				textAlign: 'left',
				borderRadius: 20,
			}}
		>
			<CardHeader sx={{ padding: '0px' }} title={data.dayWeeks} />
			<CardContent className="sm:text-xl font-bold mt-2">
				{data.date}/{data.month}{' '}
			</CardContent>
			<p className="font-bold sm:text-base">min :{state.isMetric ? data.ceMin + ' C' : data.feMin + ' F'} </p>
			<p className="font-bold sm:text-base ">max :{state.isMetric ? data.ceMax + ' C' : data.feMax + ' F'} </p>
			<div className="flex justify-center">
				<img
					className="animate-pulse"
					src={`https://developer.accuweather.com/sites/default/files/${
						data.day.Icon < 10 ? data.day.Icon.toString().padStart(2, '0') : data.day.Icon
					}-s.png`}
				></img>
			</div>
		</Card>
	);
}

export default DayCard;
