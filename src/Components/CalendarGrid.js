import "../css/calendar.css";
import Dayslot from "./Dayslot";
import WeekdaysBar from "./WeekdaysBar";
import { useState } from "react";

// const CalendarGrid = props => {
//   return <div className="CalendarGrid">{props.children}</div>;
// };
const CalendarGrid = (props) => {
  const ifDisplayCalendar = (ifRender) => {
    props.switchToTaskLisks(ifRender);
  };

  return (
    <div className="CalendarGrid">
      <WeekdaysBar />
      {props.all_slots.map((slot, index) => {
        return (
          <Dayslot
            key={index}
            id={index}
            day_num={slot.day_num}
            task_num={slot.task_num}
            finished_num={slot.finished_num}
            renderCalendar={ifDisplayCalendar}
            getKeyOfDaySlot={props.getKeyOfDaySlot}
          />
        );
      })}
    </div>
  );
};
//props.goToTasks  props.error  props.detectError props.switchToCalendar props.clearError
// goToTasks={props.goToTasks}
//             error={props.error}
//             detectError={props.detectError}
//             switchToCalendar={props.switchToCalendar}
//             clearError={props.clearError}
export default CalendarGrid;
