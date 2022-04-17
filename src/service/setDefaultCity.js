import { locaLeButtonFetch } from './getYourLocation';
import { filterCityDaysAndTemperature } from './logic';
// import { getCurrentConditions, getLocationForecastName } from './apiServices';
import { getCurrentConditions, getLocationForecastName } from './apiLocal';

export async function getCurrentWeather({ Key, name }) {
	debugger;
	const res = await setCityCurrent(Key, name);
	return res;
}

const setCityCurrent = async (Key, name) => {
	const days = await getLocationForecastName(Key);
	const currentConditions = await getCurrentConditions(Key);
	let currentWeather = {
		Key,
		name,
		isFavorite: false,
		currentConditions: currentConditions[0],
	};
	const daysForecast = await filterCityDaysAndTemperature({
		days,
		name: name,
		key: Key,
	});
	return { daysForecast, currentWeather };
};
