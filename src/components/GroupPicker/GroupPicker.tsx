import React from "react";
import styles from "./GroupPicker.module.sass";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import GroupOption from "../GroupOption/GroupOption";

export const GroupPicker = ({
  setGroup,
}: {
  setGroup: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const auth = useAuthContext();
  const { user } = auth;

  return (
    <div className={styles.groupPicker}>
      {user?.groups.map((group) => {
        return (
          <div onClick={() => setGroup(group)}>
            <GroupOption group={group} key={group} />
          </div>
        );
      })}
    </div>
  );
};

export default GroupPicker;
