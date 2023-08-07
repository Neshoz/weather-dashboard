import { IconType } from "react-icons";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import { Astro } from "../../../api/types";
import { Flex, Text } from "../../../components";
import {
  colors,
  createDateFromAMPMString,
  getRelativeTimeString,
} from "../../../util";

interface AstronomyProps {
  data: Astro;
}

export const Astronomy = ({ data }: AstronomyProps) => {
  return (
    <Flex direction="column" gap={16}>
      <Text fw={500} size="md" color={colors.white}>
        Sunrise & sunset
      </Text>
      <AstronomyItem
        label="Sunrise"
        time={data.sunrise}
        Icon={BsSunriseFill}
        highlight
      />
      <AstronomyItem label="Sunset" time={data.sunset} Icon={BsSunsetFill} />
    </Flex>
  );
};

interface AstronomyItemProps {
  label: string;
  Icon: IconType;
  time: string;
  highlight?: boolean;
}

const AstronomyItem = ({
  label,
  Icon,
  time,
  highlight,
}: AstronomyItemProps) => {
  const date = createDateFromAMPMString(time);
  const displayTime = time.startsWith("0") ? time.substring(1) : time;

  return (
    <Flex
      align="center"
      justify="between"
      style={{
        background: `linear-gradient(to right, ${colors.blue300}, ${colors.blue200})`,
        borderRadius: 8,
        padding: 16,
        border: highlight ? `1px solid ${colors.blue100}` : undefined,
      }}
    >
      <Flex align="center" gap={16} flex="1">
        <Icon size={40} color={colors.gray100} />
        <Flex direction="column">
          <Text color={colors.gray100}>{label}</Text>
          <Text size="lg" fw={600} color={colors.white}>
            {displayTime}
          </Text>
        </Flex>
      </Flex>
      <Flex flex="1" justify="end">
        <Text color={colors.gray100}>{getRelativeTimeString(date)}</Text>
      </Flex>
    </Flex>
  );
};
