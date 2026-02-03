import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import "../Styles/Passenger.css";
import passdetails from "../assets/passdetails.jpeg";

const PassengerDetails = () => {
  const navigate = useNavigate(); // <-- initialize navigate

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    age: "",
    nationality: "",
    passportNumber: "",
    email: "",
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Passenger details saved successfully!");
    console.log(formData);

    // Navigate to Flight Preferences page
    navigate("/preferences");
  };

  return (
    <div className="page" style={{ backgroundImage: `url(${passdetails})` }}>
      <div className="card">
        <div className="header">
          <h1>Passenger Details</h1>
          <p>Please enter details exactly as per passport</p>
        </div>

        <div className="form">
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Gender</label>
            <select name="gender" onChange={handleChange}>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="field">
            <label>Date of Birth</label>
            <input type="date" name="dob" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Nationality</label>
            <input
              name="nationality"
              placeholder="Nationality"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Passport Number</label>
            <input
              name="passportNumber"
              placeholder="Passport number"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile number"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter full address"
              onChange={handleChange}
            />
          </div>

          <button onClick={handleSave}>Save & Continue</button>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
