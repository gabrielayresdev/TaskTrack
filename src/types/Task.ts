export interface TaskInterface {
  id: string;
  title: string;
  description: string;
  group: string[];
  priority: "high" | "medium" | "low";
  taskGroup: string;
  endAt: string;
  checked: boolean;
}
