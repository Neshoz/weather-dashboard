import classes from "./app-layout.module.css";

interface Props {
  navigation: JSX.Element;
  main: JSX.Element;
}

export const AppLayout = ({ navigation, main }: Props) => {
  return (
    <div className={classes.appContainer}>
      <nav role="navigation" className={classes.appSidebar}>
        {navigation}
      </nav>
      <main className={classes.appMain}>{main}</main>
    </div>
  );
};
