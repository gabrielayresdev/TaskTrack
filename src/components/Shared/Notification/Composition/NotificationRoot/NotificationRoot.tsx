import React, { useEffect } from "react";
import styles from "./NotificationRoot.module.sass";
import removeAnimate from "../../../../../utils/removeAnimate";
interface INotificationRoot extends React.PropsWithChildren {
  style?: React.CSSProperties | undefined;
  time: number;
}

const NotificationRoot = ({
  children,
  style,
  time,
  ...args
}: INotificationRoot) => {
  const [progress, setProgress] = React.useState(0);
  const notificationRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progress < 100) {
      setTimeout(() => setProgress((prev) => (prev += 0.1)), time / 1000);
    }
  }, [progress, time]);

  if (progress >= 100) {
    if (notificationRef.current) {
      removeAnimate(notificationRef.current);
    }
  }

  return (
    <div
      ref={notificationRef}
      className={styles.wrapper}
      style={style}
      {...args}
    >
      {children}
      <span className={styles.bar} style={{ width: `${progress}%` }}></span>
    </div>
  );
};

export default NotificationRoot;
