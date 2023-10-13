import { useQuery, UseQueryOptions } from "react-query";
import { Coordinates } from "./types";
import { fetchHistoricalWeather, fetchWeatherForecast } from "./weather";

const weatherForecastQueryKey = "weather-forecast";

export function useWeatherForecastQuery(
  location: string | Coordinates,
  options?: UseQueryOptions
) {
  return useQuery(
    [weatherForecastQueryKey, location],
    () => fetchWeatherForecast(location),
    { enabled: options?.enabled }
  );
}

export function useHistoricalWeatherQuery(location: string | Coordinates) {
  return useQuery([weatherForecastQueryKey, location, "history"], () =>
    fetchHistoricalWeather(location)
  );
}
