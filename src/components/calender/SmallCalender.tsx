import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import GlobalContext from "../../../context/GlobalContext";
import { getMonth } from "../../../utils";

const SmallCalender = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());

  console.log("dayjs", dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex } = useContext(GlobalContext);

  console.log(monthIndex);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <div className="flex items-center">
          <p className="text-gray-500 font-bold px-2">
            {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
              "MMMM YYYY"
            )}
          </p>
          <button
            onClick={() => setCurrentMonthIdx((prv) => prv - 1)}
            className="btn btn-ghost p-2"
          >
            <BsChevronLeft />
          </button>
          <button
            onClick={() => setCurrentMonthIdx((prv) => prv + 1)}
            className="btn btn-ghost p-2"
          >
            <BsChevronRight />
          </button>
        </div>
      </header>
    </div>
  );
};

export default SmallCalender;
