import { get } from "../http";
import { Coordinates, WeatherForecast } from "./types";

export function fetchWeatherForecast(location: string | Coordinates) {
  const q =
    typeof location === "string"
      ? location
      : `${location.latitude},${location.longitude}`;

  return get<WeatherForecast>("/forecast.json", {
    q,
    days: 1,
  });
}
