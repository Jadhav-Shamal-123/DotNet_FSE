import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  const cohorts = [
    {
      cohortCode: "INTADMDF10",
      startDate: "22-Feb-2022",
      currentStatus: "Scheduled",
      coach: "Aathma",
      trainer: "Jojo Jose",
    },
    {
      cohortCode: "ADM21JF014",
      startDate: "10-Sep-2021",
      currentStatus: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith",
    },
    {
      cohortCode: "CDBJF21025",
      startDate: "24-Dec-2021",
      currentStatus: "Ongoing",
      coach: "Aathma",
      trainer: "John Doe",
    },
    {
      cohortCode: "INTADMJF12",
      startDate: "22-Feb-2022",
      currentStatus: "Scheduled",
      coach: "Ibrahim",
      trainer: "To Be Assigned",
    },
    {
      cohortCode: "CDE22JF011",
      startDate: "24-Dec-2021",
      currentStatus: "Ongoing",
      coach: "Apoorv",
      trainer: "Emma Swan",
    },
    {
      cohortCode: "INTADMDF09",
      startDate: "22-Feb-2022",
      currentStatus: "Scheduled",
      coach: "Aathma",
      trainer: "Babjee Rao",
    },
    {
      cohortCode: "ADM22DF001",
      startDate: "10-Sep-2021",
      currentStatus: "Ongoing",
      coach: "Ibrahim",
      trainer: "Marie Curie",
    },
  ];

  return (
    <div>
      <h1>Cohorts Details</h1>

      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
