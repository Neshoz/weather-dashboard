import { RiSearch2Line } from "react-icons/ri";
import { Flex, Input, PaddedArea } from "../../../components";
import { TodaysDate } from "./TodaysDate";

export const Header = () => {
  return (
    <header style={{ width: "100%" }}>
      <PaddedArea>
        <Flex gap={32} align="center">
          <TodaysDate />
          <div style={{ flex: 1 }}>
            <Input
              placeholder="Search location"
              leftIcon={<RiSearch2Line size={20} />}
            />
          </div>
        </Flex>
      </PaddedArea>
    </header>
  );
};
