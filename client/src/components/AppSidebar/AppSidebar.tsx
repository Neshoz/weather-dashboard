import { PiHouseSimple } from "react-icons/pi";
import { HiOutlineMap } from "react-icons/hi2";
import { GoLocation } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import classes from "./app-sidebar.module.css";

const items = [
  { label: "Dashboard", Icon: PiHouseSimple },
  { label: "Map", Icon: HiOutlineMap },
  { label: "Saved Locations", Icon: GoLocation },
  { label: "Calendar", Icon: IoCalendarOutline },
];

export const AppSidebar = () => {
  const getClassName = (item: string) => {
    if (item === "Dashboard") {
      return [classes.appSidebarItem, classes.appSidebarItemActive].join(" ");
    }
    return classes.appSidebarItem;
  };

  return (
    <div className={classes.appSidebar}>
      {items.map(({ label, Icon }) => (
        <div key={label} className={getClassName(label)}>
          <i className={classes.appSidebarItemIcon}>
            <Icon />
          </i>
          {label}
        </div>
      ))}
    </div>
  );
};
