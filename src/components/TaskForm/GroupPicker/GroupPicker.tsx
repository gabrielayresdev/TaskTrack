import styles from "./GroupPicker.module.sass";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import GroupOption from "../../GroupOption/GroupOption";

export const GroupPicker = ({
  setGroup,
}: {
  setGroup: (group: string) => void;
}) => {
  const auth = useAuthContext();
  const { user } = auth;

  return (
    <div className={styles.groupPicker}>
      {user?.groups.map((group) => {
        return (
          <div
            key={group}
            className={styles.option}
            onClick={() => setGroup(group)}
          >
            <GroupOption group={group} key={group} />
          </div>
        );
      })}
    </div>
  );
};

export default GroupPicker;
