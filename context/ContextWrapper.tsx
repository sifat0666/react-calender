import dayjs, { Dayjs } from "dayjs";
import React, { ReactNode, useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import { IEvents } from "./../types";

function savedEventsReducer(
  state: any,
  { type, payload }: { type: string; payload: IEvents }
) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt: any) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt: any) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

const ContextWrapper = ({ children }: { children: ReactNode }) => {
  const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState<any>(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState() as any;

  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

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
        dispatchCalEvent,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
