import React from "react";
import styles from "./Wave.module.sass";
import wave from "/src/assets/wave.svg";

interface IWave extends React.HTMLProps<HTMLImageElement> {
  className: string;
}

export const Wave = ({ className, ...args }: IWave) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...args}>
      <img src={wave} />
    </div>
  );
};

export default Wave;
