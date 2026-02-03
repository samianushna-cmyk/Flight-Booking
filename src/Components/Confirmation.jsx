import React from "react";
import "../Styles/Confirmation.css";

const Confirmation = () => {
  return (
    <div className="success-page">
      <div className="success-card">
        <h1>✅ Booking Successful!</h1>
        <p>Your flight ticket has been booked successfully.</p>

        <div className="details">
          <p>
            <strong>Booking ID:</strong> BK20260210
          </p>
          <p>
            <strong>Status:</strong> Confirmed
          </p>
          <p>
            <strong>Payment:</strong> Successful
          </p>
        </div>

        <p className="thank-you">
          Thank you for choosing our airline ✈️ Have a pleasant journey!
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
