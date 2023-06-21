import { useState } from "react";

export default function MoreLessBtn() {
  const [moreLess, setMoreLess] = useState(true);

  return (
    <button className="btn-more" onClick={() => setMoreLess((c) => !c)}>
      {moreLess ? "more" : "less"}
      {moreLess ? (
        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <circle fill="#303030" cx="20" cy="20" r="20" />
            <path stroke="#FFF" strokeWidth="2" d="m14 18 6 6 6-6" />
          </g>
        </svg>
      ) : (
        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <circle fill="#303030" cx="20" cy="20" r="20" />
            <path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" />
          </g>
        </svg>
      )}
    </button>
  );
}
