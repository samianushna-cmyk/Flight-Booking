import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Payment.css";

const Payment = () => {
  const [method, setMethod] = useState("");
  const navigate = useNavigate();

  const handlePay = () => {
    alert(`Payment successful using ${method}`);
    navigate("/confirmation"); // ✅ go to confirmation page
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>Payment</h1>
        <h3>Select Payment Method</h3>

        <label className="payment-option">
          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={(e) => setMethod(e.target.value)}
          />
          UPI
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="payment"
            value="Credit / Debit Card"
            onChange={(e) => setMethod(e.target.value)}
          />
          Credit / Debit Card
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="payment"
            value="Net Banking"
            onChange={(e) => setMethod(e.target.value)}
          />
          Net Banking
        </label>

        <button disabled={!method} onClick={handlePay}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
