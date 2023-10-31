import React from "react";
import RadioButton from "../../FormComponents/RadioButton/RadioButton";
import styles from "./GroupsForm.module.sass";
import SvgPerson from "../../../iconComponents/Icons/Person";
import SvgWork from "../../../iconComponents/Icons/Work";
import SvgStudies from "../../../iconComponents/Icons/Studies";
import Button from "../../Shared/Button/Button";
import { useRegisterContext } from "../../../contexts/RegisterContext";
import { useNotificationContext } from "../../../contexts/NotificationContext";
import { useNavigate } from "react-router-dom";

export const GroupsForm = () => {
  const { GoPreviousPage, register } = useRegisterContext();
  const { formValues } = useRegisterContext();
  const { groups: groupsContext } = formValues;
  const [groups, setGroups] = groupsContext;
  const { createNotification } = useNotificationContext();
  const navigate = useNavigate();

  function handleGroups(event: React.MouseEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    if (target) {
      const index = groups.indexOf(target.value);
      if (index >= 0) {
        setGroups([
          ...groups.slice(0, index),
          ...groups.slice(index + 1, groups.length),
        ]);
      } else {
        setGroups([...groups, target.value]);
      }
    }
  }

  async function registerUser() {
    if (groups.length === 0) {
      createNotification({
        type: "Alert",
        message: "You must choose at least one group",
      });
    } else {
      console.log("Registrando...");
      const { response } = await register();
      if (response.ok) {
        createNotification({
          type: "Success",
          message: "User created with success.",
        });
        navigate("/login");
      } else {
        const message = await response.text();
        createNotification({
          type: "Alert",
          message: message,
        });
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <RadioButton
          value="Personal"
          checked={groups.includes("Personal")}
          handleClick={handleGroups}
          id="Personal"
          label="Personal"
          Icon={SvgPerson}
        />
        <RadioButton
          value="Work"
          checked={groups.includes("Work")}
          handleClick={handleGroups}
          id="Work"
          label="Work"
          Icon={SvgWork}
        />
        <RadioButton
          value="Studies"
          checked={groups.includes("Studies")}
          handleClick={handleGroups}
          id="Studies"
          label="Studies"
          Icon={SvgStudies}
        />
      </div>
      <Button
        text="Sign up"
        onClick={registerUser}
        style={{ marginTop: "2rem" }}
      />
      <button className={styles.return} onClick={GoPreviousPage}>
        return
      </button>
    </div>
  );
};

export default GroupsForm;
