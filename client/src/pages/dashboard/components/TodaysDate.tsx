import { Heading, Text } from "../../../components";
import { formatDate } from "../../../util";

const today = new Date();

export const TodaysDate = () => (
  <div>
    <Heading>{formatDate(today, { variant: "short" })}</Heading>
    <Text>{formatDate(today)}</Text>
  </div>
);
