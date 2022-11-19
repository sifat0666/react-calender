import React, { useContext, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { MdDragHandle } from "react-icons/md";
import GlobalContext from "../../../context/GlobalContext";

const EventModal = () => {
  const { setShowEventModal } = useContext(GlobalContext);

  const [title, setTitle] = useState("");
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-primary-content rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="p-2">
            <MdDragHandle className="text-xl font-bold" />
          </span>
          <button
            onClick={() => setShowEventModal(false)}
            className="btn btn-ghost"
          >
            <span>
              <GrFormClose />
            </span>
          </button>
        </header>
        <div className="pt-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div className="">
              <input
                type="text"
                name="title"
                placeholder="Add title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pv-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-primary mb-2"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventModal;
