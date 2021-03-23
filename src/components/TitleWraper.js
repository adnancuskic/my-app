import { useState } from "react";

function TitleWraper(props) {
  const booking_av = props.booking;

  return (
    <div className="title-wrapper">
      <button className="btn btn-solid border btn-booking-request">
        {booking_av ? "Booking Request" : "Booking not available"}
      </button>

      <h1 className="title">
        {props.name}
        <div className="tooltip-wrapper">
          <span className="profile-claimed">Profile claimed</span>
          <div className="tooltip">
            <h3>Vote for subgenres</h3>
            <p>
              Don’t agree with the subgenres? Add the ones you think are missing
              or vote for existing to get yours on top!
            </p>
            <div className="stats-sheet">
              <div className="row">
                <h5>Alternative rock</h5>
                <div className="graph-line">
                  <span className="line" style={{ width: "47%" }}>
                    47%
                  </span>
                </div>
              </div>
              <div className="row">
                <h5>Alternative metal</h5>
                <div className="graph-line">
                  <span className="line" style={{ width: "23%" }}>
                    23%
                  </span>
                </div>
              </div>
              <div className="row">
                <h5>Progressive rock</h5>
                <div className="graph-line">
                  <span className="line" style={{ width: "15%" }}>
                    15%
                  </span>
                </div>
              </div>
            </div>
            <p>
              <button className="btn btn-shadow">Vote now</button>
            </p>
          </div>
        </div>
        <span className="trending-icon">Trending</span>
      </h1>
    </div>
  );
}

export default TitleWraper;
