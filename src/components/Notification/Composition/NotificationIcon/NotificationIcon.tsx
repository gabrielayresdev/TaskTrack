import React from "react";
import styles from "./NotificationIcon.module.sass";

interface INotificationIcon {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  iconProps?: React.SVGProps<SVGSVGElement>;
  style?: React.CSSProperties | undefined;
}

const NotificationIcon = ({ Icon, iconProps, style }: INotificationIcon) => {
  return <Icon {...iconProps} style={style} className={styles.wrapper} />;
};

export default NotificationIcon;
