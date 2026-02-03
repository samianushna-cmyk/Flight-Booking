import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Styles/FlightPreferences.css";
import bgImg from "../assets/passdetails.jpeg";

const FlightPreferences = () => {
  const [seat, setSeat] = useState("Window");
  const [food, setFood] = useState("Veg");
  const [baggage, setBaggage] = useState("15 Kg");
  const [wheelchair, setWheelchair] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

  const handleConfirm = () => {
    // Optionally, you can save preferences here
    const preferences = { seat, food, baggage, wheelchair };
    console.log("Preferences saved:", preferences);

    // Navigate to login/signup page
    navigate("/login");
  };

  return (
    <div className="pref-page" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="pref-card">
        <h2>Flight Preferences</h2>
        <p className="subtitle">Customize your journey for maximum comfort</p>

        {/* Seat Preference */}
        <div className="section">
          <h4>Seat Preference</h4>
          <div className="options">
            {["Window", "Aisle", "Middle"].map((item) => (
              <div
                key={item}
                className={`option ${seat === item ? "active" : ""}`}
                onClick={() => setSeat(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Food Preference */}
        <div className="section">
          <h4>Food Preference</h4>
          <div className="options">
            {["Veg", "Non-Veg"].map((item) => (
              <div
                key={item}
                className={`option ${food === item ? "active" : ""}`}
                onClick={() => setFood(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Baggage */}
        <div className="section">
          <h4>Baggage Allowance</h4>
          <select value={baggage} onChange={(e) => setBaggage(e.target.value)}>
            <option>15 Kg</option>
            <option>20 Kg</option>
            <option>25 Kg</option>
            <option>30 Kg</option>
          </select>
        </div>

        {/* Wheelchair */}
        <div className="section checkbox">
          <label>
            <input
              type="checkbox"
              checked={wheelchair}
              onChange={() => setWheelchair(!wheelchair)}
            />
            Require Wheelchair Assistance
          </label>
        </div>

        {/* Preview */}
        <div className="preview">
          <h4>Preview</h4>
          <p>
            <strong>Seat:</strong> {seat}
          </p>
          <p>
            <strong>Food:</strong> {food}
          </p>
          <p>
            <strong>Baggage:</strong> {baggage}
          </p>
          <p>
            <strong>Wheelchair:</strong> {wheelchair ? "Yes" : "No"}
          </p>
        </div>

        <button className="confirm-btn" onClick={handleConfirm}>
          Confirm Preferences
        </button>
      </div>
    </div>
  );
};

export default FlightPreferences;
