export default function ExpandView({ moreLess }) {
  return (
    <>
      {!moreLess && (
        <div className="expand-container">
          <div className="expand-left">
            <div className="expand-item">
              <p className="expand-title heading_6 uppercase">
                current timezone
              </p>
              <p className="expand-value heading_2">Europe/London</p>
            </div>

            <div className="expand-item">
              <p className="expand-title heading_6 uppercase">
                day of the year
              </p>
              <p className="expand-value heading_2">295</p>
            </div>
          </div>

          <div className="line"></div>

          <div className="expand-right">
            <div className="expand-item">
              <p className="expand-title heading_6 uppercase">
                day of the week
              </p>
              <p className="expand-value heading_2">5</p>
            </div>

            <div className="expand-item">
              <p className="expand-title heading_6 uppercase">week number</p>
              <p className="expand-value heading_2">42</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
