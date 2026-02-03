import "../Styles/Card.css";
import { useNavigate } from "react-router-dom";

// Import images
import airindiaImg from "../assets/airindia.jpeg";
import indigoImg from "../assets/indigo.jpg";
import vistaraImg from "../assets/vistara.jpg";
import spicejetImg from "../assets/spicejet.jpg";
import emiratesImg from "../assets/emirates.jpg";
import qatarImg from "../assets/qatar.jpg";

const flights = [
  {
    id: 1,
    name: "Air India",
    route: "Delhi → London",
    price: "₹55,000",
    image: airindiaImg,
  },
  {
    id: 2,
    name: "IndiGo",
    route: "Mumbai → Dubai",
    price: "₹18,000",
    image: indigoImg,
  },
  {
    id: 3,
    name: "Vistara",
    route: "Delhi → Singapore",
    price: "₹42,000",
    image: vistaraImg,
  },
  {
    id: 4,
    name: "SpiceJet",
    route: "Chennai → Bangkok",
    price: "₹22,000",
    image: spicejetImg,
  },
  {
    id: 5,
    name: "Emirates",
    route: "Delhi → New York",
    price: "₹75,000",
    image: emiratesImg,
  },
  {
    id: 6,
    name: "Qatar Airways",
    route: "Mumbai → Doha",
    price: "₹48,000",
    image: qatarImg,
  },
];

const Card = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/passenger-details"); // ✅ opens Passenger Details
  };

  return (
    <div className="cards-container">
      {flights.map((flight) => (
        <div className="flight-card" key={flight.id}>
          <div className="flight-image">
            <img src={flight.image} alt={flight.name} />
          </div>
          <h3>{flight.name}</h3>
          <p className="route">{flight.route}</p>
          <p className="price">{flight.price}</p>
          <button className="select-btn" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
