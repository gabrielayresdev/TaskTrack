import React from "react";
import styles from "./TaskFormPickers.module.sass";
import DatePicker from "../DatePicker/DatePicker";
import { from_Dayjs_To_MMDDYYYY } from "../../../utils/formatDate";
import dayjs from "dayjs";
import GroupPicker from "../GroupPicker/GroupPicker";
import PriorityPicker from "../PriorityPicker/PriorityPicker";
import { ReactComponent as Calendar } from "/src/assets/Icons/Calendar.svg";
import GroupOption from "../../GroupOption/GroupOption";
import PriorityOption from "../../PriorityOption/PriorityOption";
import Popup from "../../Popup/Popup";
import { TaskInterface } from "../../../types/Task";

interface TaskFormPickers {
  task: TaskInterface;
  setTask: React.Dispatch<React.SetStateAction<TaskInterface>>;
}

export const TaskFormPickers = ({ task, setTask }: TaskFormPickers) => {
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
  const openPopup = (type: "date" | "group" | "priority") => {
    setPopupContent(type);
    setShowPopup(true);
  };

  return (
    <div className={styles.popups}>
      <span className={styles.popupItem} onClick={() => openPopup("date")}>
        <Calendar /> {from_Dayjs_To_MMDDYYYY(dayjs(task.endAt))}
      </span>
      <span className={styles.popupItem} onClick={() => openPopup("group")}>
        <GroupOption group={task.taskGroup} />
      </span>
      <span className={styles.popupItem} onClick={() => openPopup("priority")}>
        <PriorityOption priority={task.priority} />
      </span>

      <Popup show={showPopup} setShow={setShowPopup}>
        {popupContents[popupContent]}
      </Popup>
    </div>
  );
};

export default TaskFormPickers;
