import React from "react";
import styles from "./GroupOption.module.sass";
import { ReactComponent as Person } from "/src/assets/Icons/person.svg";
import { ReactComponent as Work } from "/src/assets/Icons/Work.svg";
import { ReactComponent as Book } from "/src/assets/Icons/Studies.svg";
import { ReactComponent as Circle } from "/src/assets/Icons/circle.svg";

interface GroupPickerInterface {
  group: string;
}

export const GroupOption = ({ group }: GroupPickerInterface) => {
  const groupName = group.toLowerCase().trim();
  let icon = <Person />;

  switch (groupName) {
    case "personal":
      icon = <Person />;
      break;
    case "studies":
      icon = <Book />;
      break;
    case "work":
      icon = <Work />;
      break;
    default:
      icon = <Circle />;
  }

  return (
    <div className={styles.option} key={groupName}>
      <span className={styles.icon}>{icon}</span> {group.toLowerCase()}
    </div>
  );
};

export default GroupOption;
