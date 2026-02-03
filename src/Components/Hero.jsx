import plane from "../assets/plane.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/flights");
  };

  return (
    <div
      className="hero-single-bg"
      style={{ backgroundImage: `url(${plane})` }} // <-- background image here
    >
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">✈ Airlines</div>
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="navbar-right">
          <input className="search-box" placeholder="Search" />
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Signup</button>
          </div>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="hero-content">
        <div className="hero-text-overlay">
          <h1>
            Hi, <span>where</span> <br />
            would you like to <br />
            go?
          </h1>
          <p className="moving-text">
            Book flights worldwide — comfort and safety guaranteed!
          </p>
          <button className="book-btn" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">© Airlines</div>
          <div className="footer-sections">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Login</li>
                <li>Signup</li>
                <li>About</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
