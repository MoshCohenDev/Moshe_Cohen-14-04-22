export async function filterCityDaysAndTemperature({ days, name, key }) {
  let temp = days.DailyForecasts;
  let arr = [];
  let obj = {};
  for (let item of temp) {
    obj.name = name;
    obj.key = key;
    obj.max = item.Temperature.Maximum.Value;
    obj.min = item.Temperature.Minimum.Value;
    obj.date = new Date(item.Date).getDate();
    obj.month = new Date(item.Date).getMonth() + 1;
    obj.dayWeeks = new Date(item.Date).toUTCString().substring(0, 3);
    obj.day = item.Day;
    obj.night = item.Night;
    obj.WeatherTextWeek = days.Headline.Text;
    arr.push(obj);
    obj = {};
  }
  return arr;
}
