import { useState } from "react";
import Calender from "./pages/Calender";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Calender />
    </div>
  );
}

export default App;
