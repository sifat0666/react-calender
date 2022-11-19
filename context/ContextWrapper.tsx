import dayjs, { Dayjs } from "dayjs";
import React, { ReactNode, useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = ({ children }: { children: ReactNode }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState<any>(null);
  const [daySelected, setDaySelected] = useState<Dayjs>() as any;
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        setSmallCalendarMonth,
        smallCalendarMonth,
        daySelected,
        setDaySelected,
        setShowEventModal,
        showEventModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
