import React from "react";
import styles from "./TaskForm.module.sass";
import { ReactComponent as Check } from "/src/assets/Icons/Check.svg";
import { ReactComponent as Minus } from "/src/assets/Icons/SquareMinus.svg";
import { ReactComponent as Xmark } from "/src/assets/Icons/XMark.svg";
import { ReactComponent as Plus } from "/src/assets/Icons/Plus.svg";
import { ReactComponent as Calendar } from "/src/assets/Icons/Calendar.svg";
import Popup from "../Popup/Popup";
import DatePicker from "../DatePicker/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import GroupPicker from "../GroupPicker/GroupPicker";
import GroupOption from "../GroupOption/GroupOption";
import PriorityPicker from "../PriorityPicker/PriorityPicker";
import PriorityOption from "../PriorityOption/PriorityOption";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import { formatDate } from "../../utils/formatDate";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { createTask } from "../../api";

export const TaskForm = ({ closeModal }: { closeModal?: VoidFunction }) => {
  const auth = useAuthContext();
  const { user } = auth;
  const [title, setTitle] = React.useState<string>("New Task");
  const [description, setDescription] = React.useState<string>("");
  const [group, setGroup] = React.useState<string>(() => {
    if (user?.groups[0]) return user?.groups[0];
    else return "personal";
  });
  const [priority, setPriority] = React.useState<"high" | "medium" | "low">(
    "low"
  );
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());

  const [showPopup, setShowPopup] = React.useState(false);

  const [popupContent, setPopupContent] = React.useState<
    "date" | "group" | "priority"
  >("date");

  const popupContents = {
    date: <DatePicker date={date} setDate={setDate} />,
    group: <GroupPicker setGroup={setGroup} />,
    priority: <PriorityPicker setPriority={setPriority} />,
  };

  const { createNotification } = useNotificationContext();

  const openPopup = (type: "date" | "group" | "priority") => {
    setPopupContent(type);
    setShowPopup(true);
  };

  async function saveTask() {
    if (!title) setTitle("New Task");
    const token = localStorage.getItem("token");
    if (!token) {
      auth.signout();
      createNotification({ type: "Alert", message: "Your session expired" });
      return;
    }
    const endAt = date ? date.toJSON() : null;
    const { url, options } = createTask(
      token,
      description,
      title,
      endAt,
      priority,
      group
    );
    const response = await fetch(url, options);
    if (!response.ok) {
      const json = await response.json();
      createNotification({ type: "Alert", message: json });
    }
    if (closeModal) closeModal();
  }

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <p>{`${user?.name} > ${group}`}</p>
        <div className={styles.menu}>
          <div className={styles.icon}>
            <Check />
          </div>
          <div className={styles.icon}>
            <Minus />
          </div>
          <div className={styles.icon}>
            <Xmark />
          </div>
        </div>
      </div>

      <input
        type="text"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        className={styles.title}
      />

      <div className={styles.popups}>
        <span className={styles.popupItem} onClick={() => openPopup("date")}>
          <Calendar /> {date ? formatDate(date) : "Date"}
        </span>
        <span className={styles.popupItem} onClick={() => openPopup("group")}>
          <GroupOption group={group} />
        </span>
        <span
          className={styles.popupItem}
          onClick={() => openPopup("priority")}
        >
          <PriorityOption priority={priority} />
        </span>

        <Popup show={showPopup} setShow={setShowPopup}>
          {popupContents[popupContent]}
        </Popup>
      </div>
      <div className={styles.description}>
        <Plus className={styles.plus} />
        <textarea
          name="description"
          id="description"
          className={styles.textarea}
          placeholder="Describe your task"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        ></textarea>
      </div>
      <button className={styles.saveTask} onClick={saveTask}>
        Create
      </button>
    </div>
  );
};

export default TaskForm;
