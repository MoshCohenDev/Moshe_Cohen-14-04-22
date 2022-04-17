import { React, useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAutoCompleteCities } from '../../service/apiServices';
import actionStore from '../../store/actionStore';
import { getCurrentWeather } from '../../service/setDefaultCity';

const Search = () => {
	const [options, setOptions] = useState([]);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();

	const searchCity = async (e) => {
		if (e === '' || e === typeof number) {
			setError(true);
			setOptions([]);
		} else {
			setError(false);
			const result = await getAutoCompleteCities(e);
			const data = result.map((city) => {
				return {
					label: city.LocalizedName,
					key: city.Key,
				};
			});
			setOptions([...data]);
		}
	};
	const setCityToCurrenWeather = async (currentCity) => {
		if (currentCity === '') {
			return;
		}
		const filterName = options.filter((city) => city.label == currentCity);
		let Key = filterName[0].key;
		let name = filterName[0].label;
		const { daysForecast, currentWeather } = await getCurrentWeather({
			name,
			Key,
		});
		dispatch(actionStore('SET_CURRENT_CITY_AND_CONDITION', currentWeather));
		dispatch(actionStore('SET_IS_FAVORITE', false));
		debugger;
		dispatch(actionStore('SET_DAYS_FORECAST', daysForecast));
	};
	return (
		<div className=" text-center mt-10 flex-col">
			<Autocomplete
				disablePortal
				options={options}
				onChange={(e) => {
					setCityToCurrenWeather(e.target.textContent);
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						onChange={(e) => searchCity(e.target.value)}
						variant="outlined"
						label={'Search city english  only'}
					/>
				)}
			/>
		</div>
	);
};
export default Search;
