import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import EventModal from "./components/calender/EventModal";
import Calender from "./pages/Calender";

function App() {
  const [count, setCount] = useState(0);
  const { showEventModal } = useContext(GlobalContext);

  return (
    <div>
      {showEventModal && <EventModal />}
      <Calender />
    </div>
  );
}

export default App;
