import React from "react";
import RadioButton from "../../FormComponents/RadioButton/RadioButton";
import styles from "./GroupsForm.module.sass";
import SvgPerson from "../../../iconComponents/Icons/Person";
import SvgWork from "../../../iconComponents/Icons/Work";
import SvgStudies from "../../../iconComponents/Icons/Studies";
import Button from "../../Shared/Button/Button";
import { useRegisterContext } from "../../../contexts/RegisterContext";
import { useNotificationContext } from "../../../contexts/NotificationContext";
import AuthenticationToggle from "../../FormComponents/AuthenticationToggle/AuthenticationToggle";
import Form from "../../FormComponents/Form/Form";

export const GroupsForm = () => {
  const { GoPreviousPage, register } = useRegisterContext();
  const { formValues } = useRegisterContext();
  const { groups: groupsContext } = formValues;
  const [groups, setGroups] = groupsContext;
  const { createNotification } = useNotificationContext();

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
      register();
    }
  }

  return (
    <>
      <Form className={styles.wrapper}>
        <div className={styles.options}>
          <RadioButton
            value="personal"
            checked={groups.includes("personal")}
            handleClick={handleGroups}
            id="Personal"
            label="Personal"
            Icon={SvgPerson}
          />
          <RadioButton
            value="work"
            checked={groups.includes("work")}
            handleClick={handleGroups}
            id="Work"
            label="Work"
            Icon={SvgWork}
          />
          <RadioButton
            value="studies"
            checked={groups.includes("studies")}
            handleClick={handleGroups}
            id="Studies"
            label="Studies"
            Icon={SvgStudies}
          />
        </div>
        <Button
          text="Sign up"
          style={{ marginTop: "2rem" }}
          onClick={registerUser}
        />
        <button className={styles.return} onClick={GoPreviousPage}>
          return
        </button>
      </Form>
      <AuthenticationToggle
        line="Already have an account?"
        anchor="Login in your account"
        href="/login"
      />
    </>
  );
};

export default GroupsForm;
