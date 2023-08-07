import { Text } from "../../../components";
import { colors, useCurrentTime } from "../../../util";

export const CurrentTime = () => {
  const time = useCurrentTime();

  return (
    <Text color={colors.white} size="md" fw={600}>
      {time}
    </Text>
  );
};
