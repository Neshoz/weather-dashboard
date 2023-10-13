import { WeatherForecast } from "../../api/types";

export function getAverageTemperaturesFromHistoricalWeather(
  forecasts: WeatherForecast[]
) {
  return forecasts.map((forecast) => {
    // There's always a single day per forecast for historical weather
    const { date, day } = forecast.forecast.forecastday[0];
    return {
      date,
      averageTemp: day.avgtemp_c,
    };
  });
}
