import { IconType } from "react-icons";
import {
  BsCloudFog,
  BsCloudLightningRainFill,
  BsCloudRain,
  BsCloudRainFill,
  BsCloudRainHeavyFill,
  BsSunFill,
} from "react-icons/bs";
import { IoPartlySunny, IoCloudy } from "react-icons/io5";
import { LiaCloudSunRainSolid } from "react-icons/lia";
import { WiDaySnow } from "react-icons/wi";
import { TbMist } from "react-icons/tb";
import { Code } from "../../api/types";

export const iconByCode: Partial<Record<Code, IconType>> = {
  1000: BsSunFill,
  1003: IoPartlySunny,
  1006: IoCloudy,
  1009: IoPartlySunny,
  1030: TbMist,
  1063: LiaCloudSunRainSolid,
  1066: WiDaySnow,
  1135: BsCloudFog,
  1183: BsCloudRain,
  1189: BsCloudRainFill,
  1192: BsCloudRainHeavyFill,
  1195: BsCloudRainHeavyFill,
  1276: BsCloudLightningRainFill,
};
