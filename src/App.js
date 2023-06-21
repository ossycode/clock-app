import MoreLessBtn from "./components/MoreLessBtn";
import Quote from "./components/Quote";
import Time from "./components/Time";
import ExpandView from "./components/ExpandView";
import { useState } from "react";

export default function App() {
  const [moreLess, setMoreLess] = useState(true);

  return (
    <>
      <div className="container">
        <div className="up-container">
          <Quote moreLess={moreLess} />
          <div className="clock-container">
            <Time />
            <MoreLessBtn moreLess={moreLess} setMoreLess={setMoreLess} />
          </div>
        </div>

        <ExpandView moreLess={moreLess} />
      </div>
    </>
  );
}
