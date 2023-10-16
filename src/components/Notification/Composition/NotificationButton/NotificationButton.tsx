import React from "react";
import styles from "./NotificationButton.module.sass";

interface INotificationButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  iconProps?: React.SVGProps<SVGSVGElement>;
  style?: React.CSSProperties | undefined;
}

const NotificationButton = ({
  Icon,
  iconProps,
  style,
  ...args
}: INotificationButton) => {
  return (
    <button className={styles.wrapper} style={style} {...args}>
      <Icon {...iconProps} />
    </button>
  );
};

export default NotificationButton;
