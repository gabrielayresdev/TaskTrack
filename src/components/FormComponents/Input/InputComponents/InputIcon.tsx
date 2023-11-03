import React from "react";
import styles from "./InputIcon.module.sass";

interface IInputIcon extends React.HTMLProps<HTMLDivElement> {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const InputIcon = ({ Icon, color, ...args }: IInputIcon) => {
  return (
    <div className={styles.icon} style={{ fill: `${color}` }} {...args}>
      <Icon />
    </div>
  );
};

export default InputIcon;
