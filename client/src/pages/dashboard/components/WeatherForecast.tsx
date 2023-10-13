import {
  useHistoricalWeatherQuery,
  useWeatherForecastQuery,
} from "../../../api/queries";
import {
  ConditionIcon,
  Divider,
  Flex,
  PaddedArea,
  ProgressBar,
  Text,
} from "../../../components";
import {
  colors,
  findNextNthItemsByHourOffset,
  formatTemperature,
  formatTime,
} from "../../../util";
import { Astronomy } from "./Astronomy";
import { CurrentTime } from "./CurrentTime";
import classes from "./forecast.module.css";

interface Props {
  location: GeolocationCoordinates;
}

export const WeatherForecast = ({ location }: Props) => {
  const { data, isLoading } = useWeatherForecastQuery(location);
  // const { data: historicalWeather } = useHistoricalWeatherQuery(location);

  if (isLoading) {
    return null;
  }

  if (!data) {
    return null;
  }

  const nextFourHours = findNextNthItemsByHourOffset(
    data.forecast.forecastday[0].hour,
    4
  );

  return (
    <div className={classes.container}>
      <PaddedArea>
        <Flex justify="between" align="center" pb={60}>
          <Text size="lg" color={colors.white} fw={500}>
            {data?.location.name}, {data?.location.country}
          </Text>
          <CurrentTime />
        </Flex>
        <ConditionIcon
          size={44}
          color={colors.gray50}
          code={data.current.condition.code}
        />
        <Flex align="center" justify="between" pb={24}>
          <div style={{ flex: 2 }}>
            <Text fw={400} color={colors.white} size={52}>
              {formatTemperature(data.current.temp_c)}
            </Text>
          </div>
          <div style={{ flex: 1, textAlign: "right" }}>
            <Text size="md" color={colors.white}>
              {data.current.condition.text}
            </Text>
          </div>
        </Flex>
        <Divider color={colors.gray400} />
        <Flex direction="column" pt={24} pb={28} gap={24}>
          <Text fw={500} size="md" color={colors.white}>
            Chance of rain
          </Text>
          {nextFourHours.map((hour) => (
            <Flex key={hour.time} align="center" gap={20}>
              <Text color={colors.white}>
                {formatTime(new Date(hour.time), {
                  variant: "full",
                  hour12: true,
                  hour: "numeric",
                }).toUpperCase()}
              </Text>
              <div style={{ flex: 1 }}>
                <ProgressBar progress={hour.chance_of_rain} />
              </div>
              <Text color={colors.white}>{hour.chance_of_rain}%</Text>
            </Flex>
          ))}
        </Flex>
        <Astronomy data={data.forecast.forecastday[0].astro} />
      </PaddedArea>
    </div>
  );
};
