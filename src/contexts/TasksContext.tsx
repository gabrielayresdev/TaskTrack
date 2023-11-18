import React from "react";
import { TaskInterface } from "../types/Task";
import { listTask } from "../api";
import { useNotificationContext } from "./NotificationContext";

interface TaskContextInterface {
  tasks: TaskInterface[];
  recoverTasks: VoidFunction;
}

const TaskContext = React.createContext<TaskContextInterface | null>(null);

export function useTaskContext() {
  const context = React.useContext(TaskContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

const TaskContextProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, setTasks] = React.useState<TaskInterface[]>([]);
  const { createNotification } = useNotificationContext();

  async function recoverTasks() {
    const token = localStorage.getItem("token");
    if (!token) {
      createNotification({ type: "Alert", message: "Your session expired!" });
      return;
    }
    const { url, options } = listTask(token);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const json = await response.json();
        throw new Error(`Error ${response.status}: ${json}`);
      }

      const json = (await response.json()) as TaskInterface[];
      setTasks(json);
    } catch (err) {
      if (err instanceof Error)
        createNotification({
          type: "Alert",
          message: "It was not possible to get your tasks!",
        });
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, recoverTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
