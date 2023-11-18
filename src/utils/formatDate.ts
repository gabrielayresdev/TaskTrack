import { Dayjs } from "dayjs";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function from_Dayjs_To_MMDDYYYY(date: Dayjs) {
  const day = String(date.date()).padStart(2, "0");
  const month = String(date.month() + 1).padStart(2, "0");
  const year = String(date.year());

  return `${month}/${day}/${year}`;
}

export function from_ISO8601_To_MMMDDYYYY(date: string) {
  const dateObj = new Date(date);

  const day = String(dateObj.getDay()).padStart(2, "0");
  const month = months[dateObj.getMonth()];
  const year = String(dateObj.getFullYear());

  return `${month} ${day}, ${year}`;
}
