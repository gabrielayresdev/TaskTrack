export interface TaskInterface {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  taskGroup: string;
  endAt: string;
  checked: boolean;
}
