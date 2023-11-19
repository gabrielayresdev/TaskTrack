import styles from "./DatePicker.module.sass";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

interface DatePickerInterface {
  date: string;
  setDate: (date: Dayjs) => void;
}

export const DatePicker = ({ date, setDate }: DatePickerInterface) => {
  return (
    <DateCalendar
      className={styles.datePicker}
      value={dayjs(date)}
      onChange={(newDate) => setDate(newDate ? newDate : dayjs())}
    />
  );
};

export default DatePicker;
