import { React, useState } from 'react';
import actionStore from '../../store/actionStore';
import Switch from '@mui/material/Switch';
import { Card, CardHeader, CardContent, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getLocationForecastName } from '../../service/apiServices';
import { filterCityDaysAndTemperature } from '../../service/logic.js';

export default function FavoriteWeatherCard({ data }) {
	const [checked, setChecked] = useState(true);
	const dispatch = useDispatch();
	const { state } = useSelector((state) => state);
	const { favoriteWeathers, IsFavorite, isMetric } = state;
	const { currentConditions, name } = data;
	const { Temperature, WeatherText, WeatherIcon } = currentConditions;

	const removeFromFavorite = (data) => {
		console.log(data);
		const filteredItems = favoriteWeathers.filter((item) => item.Key !== data.Key);
		dispatch(actionStore('REMOVE_FAVORITE_WEATHER', filteredItems));
	};
	const setCurrentWeather = async (data) => {
		const days = await getLocationForecastName(data.Key);
		const daysForecast = await filterCityDaysAndTemperature({
			days,
			name: data.name,
			key: data.Key,
		});

		dispatch(actionStore('SET_CURRENT_CITY_AND_CONDITION', data));
		dispatch(actionStore('SET_DAYS_FORECAST', daysForecast));
	};

	return (
		<Card
			className="sm:w-auto w-96 h-32 sm:p-20 mt-2 justify-around  "
			sx={{
				textAlign: 'left',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-start',
				padding: 4,
				borderRadius: 10,
			}}
		>
			<CardHeader className="font-bold text-base" title={name} subheader={WeatherText} />
			<div className="mt-2">
				{IsFavorite ? (
					<IconButton onClick={() => removeFromFavorite(data)} aria-label="add to favorites">
						<FavoriteIcon sx={{ color: 'red' }} />
					</IconButton>
				) : (
					<IconButton onClick={() => setCurrentWeather(data)} aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
				)}
			</div>
			<CardContent className="font-bold text-xl text-center">
				{isMetric ? Temperature.Metric.Value + 'C' : Temperature.Imperial.Value + 'F'}°
			</CardContent>
			<div className="flex justify-center">
				<img
					className="animate-pulse"
					src={`https://developer.accuweather.com/sites/default/files/${WeatherIcon}-s.png`}
				></img>
			</div>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<IconButton
					onClick={() => removeFromFavorite(data)}
					aria-label="delete"
					size="large"
					color="primary"
					sx={{
						'& > p': {
							fontSize: [2, 3, 4],
						},
						'&:hover': {
							backgroundColor: 'white',
						},
					}}
				>
					<DeleteIcon fontSize="inherit" />
				</IconButton>
			</CardActions>
		</Card>
	);
}
