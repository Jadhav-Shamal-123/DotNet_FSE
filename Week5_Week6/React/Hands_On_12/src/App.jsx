import { useState } from "react";
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const flight = {
    airline: "Air India",
    flightNo: "AI-202",
    from: "Pune",
    to: "Delhi",
    departure: "10:30 AM",
    arrival: "12:45 PM",
    fare: "₹5,500",
  };

  const guestPage = (
    <div className="card">
      <h2>Please sign up.</h2>

      <table>
        <tbody>
          <tr>
            <th>Airline</th>
            <td>{flight.airline}</td>
          </tr>
          <tr>
            <th>Flight No</th>
            <td>{flight.flightNo}</td>
          </tr>
          <tr>
            <th>From</th>
            <td>{flight.from}</td>
          </tr>
          <tr>
            <th>To</th>
            <td>{flight.to}</td>
          </tr>
          <tr>
            <th>Departure</th>
            <td>{flight.departure}</td>
          </tr>
          <tr>
            <th>Arrival</th>
            <td>{flight.arrival}</td>
          </tr>
          <tr>
            <th>Fare</th>
            <td>{flight.fare}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </div>
  );

  const userPage = (
    <div className="card">
      <h2>Welcome back</h2>
      <p className="welcome-text">You can now book your ticket.</p>

      <button onClick={() => alert("Ticket Booked Successfully!")}>Book Ticket</button>
      <button className="logout" onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>
    </div>
  );

  const pageContent = isLoggedIn ? userPage : guestPage;

  return (
    <div className="container">
      <h1>Ticket Booking Application</h1>
      {pageContent}
    </div>
  );
}

export default App;