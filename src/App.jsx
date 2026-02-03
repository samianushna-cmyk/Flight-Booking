import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import PassengerDetails from "./Components/PassengerDetails";
import BookingForm from "./Components/BookingForm";
import FlightPreferences from "./Components/FlightPreferences";
import Login from "./Components/Login";
import Payment from "./Components/Payment"; // ✅ ADD THIS
import Confirmation from "./Components/Confirmation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/flights" element={<Card />} />
        <Route path="/passenger-details" element={<PassengerDetails />} />
        <Route path="/preferences" element={<FlightPreferences />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/payment" element={<Payment />} /> {/* ✅ ADD THIS */}
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
