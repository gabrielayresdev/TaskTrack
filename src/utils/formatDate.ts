import { Dayjs } from "dayjs";

export function formatDate(date: Dayjs) {
  const day = String(date.date()).padStart(2, "0");
  const month = String(date.month() + 1).padStart(2, "0");
  const year = String(date.year());

  return `${month}/${day}/${year}`;
}
