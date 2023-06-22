import MoreLessBtn from "./components/MoreLessBtn";
import Quote from "./components/Quote";
import Time from "./components/Time";
import ExpandView from "./components/ExpandView";
import { useState } from "react";
import { useData } from "./useData";

// const IP_URL = "http://worldtimeapi.org/api/ip";

export default function App() {
  const [moreLess, setMoreLess] = useState(true);
  const [location, data] = useData("http://worldtimeapi.org/api/ip");

  const {
    abbreviation,
    datetime,
    day_of_week: dayOfWeek,
    day_of_year: dayOfYear,
    timezone,
    week_number: weekNumber,
  } = data;

  const date = new Date(datetime);
  const minute = date.getMinutes();
  const hour = date.getHours();

  return (
    <>
      <div className={hour >= 12 ? "container evening" : "container morning"}>
        <div className="up-container">
          <Quote moreLess={moreLess} />
          <div className="clock-container">
            <Time
              location={location}
              abbreviation={abbreviation}
              minute={minute}
              hour={hour}
            />
            <MoreLessBtn moreLess={moreLess} setMoreLess={setMoreLess} />
          </div>
        </div>

        <ExpandView
          moreLess={moreLess}
          dayOfWeek={dayOfWeek}
          timezone={timezone}
          dayOfYear={dayOfYear}
          weekNumber={weekNumber}
          hour={hour}
        />
      </div>
    </>
  );
}
