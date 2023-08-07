import classes from "./progress-bar.module.css";

interface Props {
  progress: number;
}

export const ProgressBar = ({ progress }: Props) => {
  return (
    <div className={classes.root}>
      <div className={classes.progress} style={{ width: `${progress}%` }} />
    </div>
  );
};
