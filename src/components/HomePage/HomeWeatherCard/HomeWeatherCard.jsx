import { React, useState } from 'react';
import actionStore from '../../../store/actionStore';
import { Switch, FormControlLabel, FormGroup } from '@mui/material';
import { Card, CardHeader, CardContent, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function HomeWeatherCard({ data }) {
	const [isMetric, setIsMetric] = useState(false);
	const dispatch = useDispatch();
	const { state } = useSelector((state) => state);
	const { favoriteWeathers, isFavorite } = state;
	const { currentConditions, name } = data;
	const { Temperature, WeatherText, WeatherIcon } = currentConditions;

	const removeFromFavorite = (data) => {
		const filteredItems = favoriteWeathers.filter((item) => item.Key !== data.Key);

		dispatch(actionStore('REMOVE_FAVORITE_WEATHER', filteredItems));
		dispatch(actionStore('SET_IS_FAVORITE', false));
	};
	const setToFavoriteList = async (favoriteWeather) => {
		favoriteWeather.isFavorite = true;
		dispatch(actionStore('SET_IS_FAVORITE', true));
		dispatch(
			actionStore('ADD_TO_FAVORITE_WEATHER', {
				...favoriteWeather,
			})
		);
	};

	const handleChange = () => {
		setIsMetric(!isMetric);
	};

	return (
		// <div className={!currentConditions.IsDayTime ? "day  " : "night "}>
		<div className="p-2">
			{isFavorite ? (
				<IconButton onClick={() => removeFromFavorite(data)} aria-label="add to favorites">
					<FavoriteIcon sx={{ color: 'red', fontSize: '2rem' }} />
				</IconButton>
			) : (
				<IconButton onClick={() => setToFavoriteList(data)} aria-label="add to favorites">
					<FavoriteIcon sx={{ fontSize: '2rem', color: 'white' }} />
				</IconButton>
			)}
			<Card
				className="sm:w-auto w-96 h-32 sm:p-20 "
				sx={{
					textAlign: 'left',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-start',
					padding: 4,
					borderRadius: 10,
				}}
			>
				<div className="flex justify-between">
					<CardHeader className="font-bold " title={name} subheader={WeatherText} />
				</div>
				<CardContent className="font-bold sm:text-3xl text-center">
					{isMetric === true ? Temperature.Metric.Value + ' ° C' : Temperature.Imperial.Value + ' ° F'}
				</CardContent>
				<div className="flex justify-center">
					<img
						className="animate-pulse"
						src={`https://developer.accuweather.com/sites/default/files/${WeatherIcon}-s.png`}
					></img>
				</div>
				<FormGroup>
					<FormControlLabel onChange={handleChange} control={<Switch defaultChecked />} label="C/F" />
				</FormGroup>
			</Card>
		</div>
	);
}
