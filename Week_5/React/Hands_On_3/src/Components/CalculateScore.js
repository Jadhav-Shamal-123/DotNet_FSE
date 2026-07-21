import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore({ Name, School, Total, Goal }) {
  const average = Total / Goal;

  return (
    <div className="box">
      <h2>Student Score Card</h2>

      <p><strong>Name:</strong> {Name}</p>
      <p><strong>School:</strong> {School}</p>
      <p><strong>Total Score:</strong> {Total}</p>
      <p><strong>Subjects:</strong> {Goal}</p>
      <p><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;