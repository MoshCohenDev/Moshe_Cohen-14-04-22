import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';

function DayCard({ data }) {
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
			<p className="font-bold sm:text-base">min :{data.min} C</p>
			<p className="font-bold sm:text-base ">max :{data.max} C</p>
			<div className="flex justify-center">
				<img
					className="animate-pulse mt-2 mb-0"
					src={`https://developer.accuweather.com/sites/default/files/${data.day.Icon}-s.png`}
				></img>
			</div>
		</Card>
	);
}

export default DayCard;
