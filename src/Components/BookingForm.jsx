import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS
import "../Styles/BookingForm.css";
import bookingbg from "../assets/bookingbg.jpeg";

const BookingForm = () => {
  const navigate = useNavigate(); // ✅ ADD THIS

  const bookingDetails = {
    name: "John Doe",
    gender: "Male",
    dob: "1990-01-01",
    age: 33,
    nationality: "American",
    passport: "A1234567",
    email: "johndoe@example.com",
    mobile: "+1 123 456 7890",
    food: "Veg",
    baggage: "2 Bags",
    wheelchair: false,
    flight: "AI-203",
    seat: "12A",
    departure: "New York (JFK)",
    arrival: "London (LHR)",
    date: "2026-02-10",
    time: "08:30 AM",
  };

  const handleBookNow = () => {
    navigate("/payment"); // ✅ GO TO PAYMENT
  };

  return (
    <div
      className="confirmation-page"
      style={{ backgroundImage: `url(${bookingbg})` }}
    >
      <h1>Booking Confirmation</h1>

      <div className="ticket-card">
        <div className="ticket-header">
          <h2>✈ Airlines</h2>
          <span className="flight-number">{bookingDetails.flight}</span>
        </div>

        <div className="ticket-body">
          <div className="ticket-section">
            <h3>Passenger Details</h3>
            <p>
              <strong>Name:</strong> {bookingDetails.name}
            </p>
            <p>
              <strong>Gender:</strong> {bookingDetails.gender}
            </p>
            <p>
              <strong>DOB:</strong> {bookingDetails.dob}
            </p>
            <p>
              <strong>Age:</strong> {bookingDetails.age}
            </p>
            <p>
              <strong>Nationality:</strong> {bookingDetails.nationality}
            </p>
            <p>
              <strong>Passport:</strong> {bookingDetails.passport}
            </p>
          </div>

          <div className="ticket-section">
            <h3>Contact & Preferences</h3>
            <p>
              <strong>Email:</strong> {bookingDetails.email}
            </p>
            <p>
              <strong>Mobile:</strong> {bookingDetails.mobile}
            </p>
            <p>
              <strong>Food:</strong> {bookingDetails.food}
            </p>
            <p>
              <strong>Baggage:</strong> {bookingDetails.baggage}
            </p>
            <p>
              <strong>Wheel Chair:</strong>{" "}
              {bookingDetails.wheelchair ? "Yes" : "No"}
            </p>
          </div>

          <div className="ticket-section">
            <h3>Flight Details</h3>
            <p>
              <strong>From:</strong> {bookingDetails.departure}
            </p>
            <p>
              <strong>To:</strong> {bookingDetails.arrival}
            </p>
            <p>
              <strong>Date:</strong> {bookingDetails.date}
            </p>
            <p>
              <strong>Time:</strong> {bookingDetails.time}
            </p>
            <p>
              <strong>Seat:</strong> {bookingDetails.seat}
            </p>
          </div>
        </div>

        {/* ✅ UPDATED BUTTON */}
        <button className="print-btn" onClick={handleBookNow}>
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
