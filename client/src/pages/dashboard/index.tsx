import { Divider, Flex, Grid } from "../../components";
import { useCurrentLocation } from "../../util/location";
import { Header } from "./components/Header";
import { WeatherCondition } from "./components/WeatherCondition";
import { WeatherForecast } from "./components/WeatherForecast";

const DashboardPage = () => {
  const { location, loading } = useCurrentLocation();

  if (loading) {
    return null;
  }

  if (!location) {
    return null;
  }

  return (
    <Grid columns="1fr 30%" height="100%">
      <Flex direction="column">
        <Header />
        <Divider />
        <WeatherCondition location={location} />
      </Flex>
      <WeatherForecast location={location} />
    </Grid>
  );
};

export default DashboardPage;
