import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- added
import "../Styles/Login.css";

const Login = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [accounts, setAccounts] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [infoPanel, setInfoPanel] = useState(null);

  const navigate = useNavigate(); // <-- initialize navigate

  // Handle Signup
  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (accounts.find((acc) => acc.email === email)) {
      setInfoPanel({
        type: "error",
        message: "Account already exists!",
        data: { email },
      });
    } else {
      setAccounts([...accounts, { name, email, password }]);
      setInfoPanel({
        type: "success",
        message: "Account created successfully!",
        data: { name, email },
      });
      e.target.reset();
      setActiveForm("login"); // switch to login
      navigate("/booking"); // <-- navigate to BookingForm after signup
    }
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const account = accounts.find(
      (acc) => acc.email === email && acc.password === password,
    );

    if (account) {
      setInfoPanel({
        type: "success",
        message: `Login successful! Welcome ${account.name}`,
        data: { email },
      });
      navigate("/booking"); // <-- navigate to BookingForm on login
    } else {
      setInfoPanel({
        type: "error",
        message: "Email or password is incorrect!",
        data: { email },
      });
    }
  };

  const closePanel = () => setInfoPanel(null);

  return (
    <div className="auth-page">
      {infoPanel && (
        <div className={`info-panel ${infoPanel.type}`}>
          <div className="panel-message">{infoPanel.message}</div>
          <div className="panel-data">
            {Object.entries(infoPanel.data).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {value}
              </div>
            ))}
          </div>
          <span className="close-btn" onClick={closePanel}>
            ✖
          </span>
        </div>
      )}

      <div className="top-buttons">
        <button
          className={activeForm === "login" ? "active" : ""}
          onClick={() => setActiveForm("login")}
        >
          Login
        </button>
        <button
          className={activeForm === "signup" ? "active" : ""}
          onClick={() => setActiveForm("signup")}
        >
          Sign Up
        </button>
      </div>

      <div className="glass-card">
        {activeForm === "login" ? (
          <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input type="email" name="email" placeholder="Email" required />
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
            <div className="switch-text">
              Don't have an account?{" "}
              <span onClick={() => setActiveForm("signup")}>Sign Up</span>
            </div>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </form>
            <div className="switch-text">
              Already have an account?{" "}
              <span onClick={() => setActiveForm("login")}>Login</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
