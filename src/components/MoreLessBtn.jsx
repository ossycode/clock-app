export default function MoreLessBtn({ moreLess, setMoreLess }) {
  return (
    <button
      className="btn-more"
      onClick={() => setMoreLess((c) => !c)}
      role="tab"
    >
      {moreLess ? "more" : "less"}
      {moreLess ? (
        <svg
          role="img"
          className="btn-svg"
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="up-arrow-icon"
        >
          <title id="up-arrow-icon">Up arrow</title>

          <g fill="none" fillRule="evenodd">
            <circle fill="" cx="20" cy="20" r="20" />
            <path stroke="#FFF" strokeWidth="2" d="m14 18 6 6 6-6" />
          </g>
        </svg>
      ) : (
        <svg
          className="btn-svg"
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="down-arrow-icon"
        >
          <title id="down-arrow-icon">Down arrow</title>

          <g fill="none" fillRule="evenodd">
            <circle fill="" cx="20" cy="20" r="20" />
            <path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" />
          </g>
        </svg>
      )}
    </button>
  );
}
