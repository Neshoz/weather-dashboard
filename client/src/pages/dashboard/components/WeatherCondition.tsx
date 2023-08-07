import { BsWind, BsCloudRain, BsSun } from "react-icons/bs";
import { MdWaves } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import { useWeatherForecastQuery } from "../../../api/queries";
import {
  Card,
  Flex,
  Grid,
  Heading,
  PaddedArea,
  Text,
} from "../../../components";
import { colors, findByClosestDateToNow } from "../../../util";

interface Props {
  location: GeolocationCoordinates;
}

export const WeatherCondition = ({ location }: Props) => {
  const { data, isLoading } = useWeatherForecastQuery(location);

  if (isLoading) {
    return null;
  }

  if (!data) {
    return null;
  }

  const { current } = data;
  const { forecastday } = data.forecast;
  const mostRecentForecast = findByClosestDateToNow(forecastday[0].hour);

  return (
    <PaddedArea height="100%" width="100%">
      <Flex direction="column">
        <Heading level={2} pb={20}>
          Today overview
        </Heading>
        <Grid
          width="100%"
          rows={2}
          columns={3}
          minRowHeight={100}
          gap={16}
          pb={24}
        >
          <Card>
            <Flex align="center" gap={24}>
              <BsWind size={28} color={colors.blue50} />
              <div>
                <Text>Wind speed</Text>
                <Heading>{current.wind_kph}km/h</Heading>
              </div>
            </Flex>
          </Card>
          <Card>
            <Flex align="center" gap={24}>
              <BsCloudRain size={28} color={colors.blue50} />
              <div>
                <Text>Rain chance</Text>
                <Heading>{mostRecentForecast.chance_of_rain}%</Heading>
              </div>
            </Flex>
          </Card>
          <Card>
            <Flex align="center" gap={24}>
              <MdWaves size={28} color={colors.blue50} />
              <div>
                <Text>Pressure</Text>
                <Heading>{current.pressure_mb} hpa</Heading>
              </div>
            </Flex>
          </Card>
          <Card>
            <Flex align="center" gap={24}>
              <BsSun size={28} color={colors.blue50} />
              <div>
                <Text>UV index</Text>
                <Heading>{current.uv}</Heading>
              </div>
            </Flex>
          </Card>
          <Card>
            <Flex align="center" gap={24}>
              <BsCloudRain size={28} color={colors.blue50} />
              <div>
                <Text>Amount of rain</Text>
                <Heading>{current.precip_mm}mm</Heading>
              </div>
            </Flex>
          </Card>
          <Card>
            <Flex align="center" gap={24}>
              <IoWaterOutline size={28} color={colors.blue50} />
              <div>
                <Text>Humidity</Text>
                <Heading>{current.humidity}%</Heading>
              </div>
            </Flex>
          </Card>
        </Grid>
        <Heading level={2} pb={20}>
          Average daily temperature
        </Heading>
        <div style={{ flex: "1 0 auto", width: "100%" }}>
          <Card width="100%" height="100%" p={12}></Card>
        </div>
      </Flex>
    </PaddedArea>
  );
};
