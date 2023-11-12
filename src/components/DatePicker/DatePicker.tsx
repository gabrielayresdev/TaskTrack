import React from "react";
import styles from "./DatePicker.module.sass";
import { DateCalendar } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

interface DatePickerInterface {
  date: Dayjs | null;
  setDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

export const DatePicker = ({ date, setDate }: DatePickerInterface) => {
  return (
    <DateCalendar
      className={styles.datePicker}
      value={date}
      onChange={(newDate) => setDate(newDate)}
    />
  );
};

export default DatePicker;
