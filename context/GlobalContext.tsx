import { createContext } from "react";

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
  setSmallCalendarMonth: (index: number) => {},
  smallCalendarMonth: 0,
  daySelected: 0,
  setDaySelected: (index: number) => {},
  showEventModal: false,
  setShowEventModal: (show: boolean) => {},
});

export default GlobalContext;
