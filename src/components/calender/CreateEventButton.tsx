import React, { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="btn btn-primary "
    >
      Create Event
    </button>
  );
};

export default CreateEventButton;
