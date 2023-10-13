import { get } from "../http";
import { getDatesInternal } from "../util";
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

export function fetchHistoricalWeather(location: string | Coordinates) {
  const q =
    typeof location === "string"
      ? location
      : `${location.latitude},${location.longitude}`;

  const historyRequests = getDatesInternal(7).map((date) =>
    get<WeatherForecast>("/history.json", {
      q,
      dt: date.toLocaleDateString(),
    })
  );

  return Promise.all(historyRequests);
}
