import { useState, useContext, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";
import CalenderHeader from "../components/calender/CalenderHeader";
import Month from "../components/calender/Month";
import Sidebar from "../components/calender/Sidebar";

import { getMonth } from "./../../utils/index";

const calender = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="h-screen flex flex-col">
      <CalenderHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month month={currentMonth} />
      </div>
    </div>
  );
};

export default calender;
