const API_KEY = 'K7FyZGsQZ3hGAaPllaoQfUH8HAc7BmSb';
const URL = 'https://dataservice.accuweather.com/';

export async function getAutoCompleteCities(query) {
	try {
		const res = await fetch(`${URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`);
		return res.json();
	} catch (e) {
		return e.message;
	}
}
export async function getLocationByGeoPosition({ latitude, longitude }) {
	try {
		const res = await fetch(
			`${URL}locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude}%2C${longitude}`
		);
		return res.json();
	} catch (e) {
		return null;
	}
}

export async function getCurrentConditions(locationKey) {
	try {
		const res = await fetch(`${URL}currentconditions/v1/${locationKey}?apikey=${API_KEY}`);
		return res.json();
	} catch (e) {
		return e.message;
	}
}

export async function getLocationForecastName(locationKey) {
	try {
		const res = await fetch(`${URL}forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=true`);
		return res.json();
	} catch (e) {
		return e.message;
	}
}
