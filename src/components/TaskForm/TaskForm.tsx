import React from "react";
import styles from "./TaskForm.module.sass";
import { ReactComponent as Check } from "/src/assets/Icons/Check.svg";
import { ReactComponent as Minus } from "/src/assets/Icons/SquareMinus.svg";
import { ReactComponent as Xmark } from "/src/assets/Icons/XMark.svg";
import { ReactComponent as Plus } from "/src/assets/Icons/Plus.svg";
import { ReactComponent as Calendar } from "/src/assets/Icons/Calendar.svg";
import Popup from "../Popup/Popup";
import DatePicker from "../DatePicker/DatePicker";
import dayjs from "dayjs";
import GroupPicker from "../GroupPicker/GroupPicker";
import GroupOption from "../GroupOption/GroupOption";
import PriorityPicker from "../PriorityPicker/PriorityPicker";
import PriorityOption from "../PriorityOption/PriorityOption";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import { from_Dayjs_To_MMDDYYYY } from "../../utils/formatDate";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { createTask } from "../../api";
import { TaskInterface } from "../../types/Task";

interface TaskFormInterface {
  closeModal?: VoidFunction;
  currentTask?: TaskInterface;
  onClick: VoidFunction;
}

export const TaskForm = ({ closeModal, currentTask }: TaskFormInterface) => {
  const auth = useAuthContext();
  const { user } = auth;
  const [task, setTask] = React.useState<TaskInterface>(() => {
    if (currentTask) return currentTask;
    return {
      id: "",
      title: "New Task",
      description: "",
      endAt: dayjs().toJSON(),
      taskGroup: user?.groups[0] ? user.groups[0] : "personal",
      priority: "low",
      checked: false,
    };
  });
  const { title, description, endAt, taskGroup, priority } = task;

  const [showPopup, setShowPopup] = React.useState(false);

  const [popupContent, setPopupContent] = React.useState<
    "date" | "group" | "priority"
  >("date");

  const popupContents = {
    date: (
      <DatePicker
        date={task.endAt}
        setDate={(date) => setTask({ ...task, endAt: date.toJSON() })}
      />
    ),
    group: (
      <GroupPicker
        setGroup={(group) => setTask({ ...task, taskGroup: group })}
      />
    ),
    priority: (
      <PriorityPicker
        setPriority={(priority) => setTask({ ...task, priority: priority })}
      />
    ),
  };

  const { createNotification } = useNotificationContext();

  const openPopup = (type: "date" | "group" | "priority") => {
    setPopupContent(type);
    setShowPopup(true);
  };

  async function saveTask() {
    if (!title) setTask({ ...task, title: "New Task" });
    const token = localStorage.getItem("token");
    if (!token) {
      auth.signout();
      createNotification({ type: "Alert", message: "Your session expired" });
      return;
    }
    const { url, options } = createTask(
      token,
      description,
      title,
      endAt,
      priority,
      taskGroup
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
        <p>{`${user?.name} > ${taskGroup}`}</p>
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
        onChange={({ target }) => setTask({ ...task, title: target.value })}
        className={styles.title}
      />

      <div className={styles.popups}>
        <span className={styles.popupItem} onClick={() => openPopup("date")}>
          <Calendar /> {from_Dayjs_To_MMDDYYYY(dayjs(endAt))}
        </span>
        <span className={styles.popupItem} onClick={() => openPopup("group")}>
          <GroupOption group={taskGroup} />
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
          onChange={({ target }) =>
            setTask({ ...task, description: target.value })
          }
        ></textarea>
      </div>
      <button className={styles.saveTask} onClick={saveTask}>
        Create
      </button>
    </div>
  );
};

export default TaskForm;
