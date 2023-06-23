export default function ExpandView({
  moreLess,
  dayOfWeek,
  timezone,
  dayOfYear,
  weekNumber,
  hour,
}) {
  return (
    <>
      {!moreLess && (
        <div
          className={
            hour >= 12
              ? "expand-container expand-night"
              : "expand-container expand-day"
          }
        >
          <div className="expand-left">
            <div className="expand-item">
              <p className="expand-title heading_6 uppercase">
                current timezone
              </p>
              <p className="expand-value heading_2">{timezone}</p>
            </div>

            <div className="expand-item">
              <p className="expand-title heading_6 uppercase">
                day of the year
              </p>
              <p className="expand-value heading_2">{dayOfYear}</p>
            </div>
          </div>
          <div className="expand-right">
            <div className="expand-item">
              <p className="expand-title heading_6 uppercase">
                day of the week
              </p>
              <p className="expand-value heading_2">{dayOfWeek}</p>
            </div>

            <div className="expand-item">
              <p className="expand-title heading_6 uppercase">week number</p>
              <p className="expand-value heading_2">{weekNumber}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
