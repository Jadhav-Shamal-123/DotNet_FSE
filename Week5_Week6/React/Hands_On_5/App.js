import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  const cohorts = [
    {
      cohortCode: "INTADMDF19",
      startDate: "15 Jan 2023",
      currentStatus: "Completed",
      coach: "Neha Verma",
      trainer: "Ravi Kumar",
    },
    {
      cohortCode: "ADM211F014",
      startDate: "10 Aug 2021",
      currentStatus: "Ongoing",
      coach: "Priya Sharma",
      trainer: "Amit Singh",
    },
    {
      cohortCode: "CDAF21025",
      startDate: "05 Mar 2021",
      currentStatus: "Ongoing",
      coach: "Karan Mehta",
      trainer: "Sonal Patil",
    },
    {
      cohortCode: "INTADMJF12",
      startDate: "12 Jun 2022",
      currentStatus: "On Hold",
      coach: "Anjali Desai",
      trainer: "Vikram Jayaprakash",
    },
    {
      cohortCode: "CCC23JY011",
      startDate: "28 Feb 2021",
      currentStatus: "Dropped",
      coach: "Rohit Nair",
      trainer: "Meera Joshi",
    },
    {
      cohortCode: "INTADMF090",
      startDate: "18 Sep 2022",
      currentStatus: "Not Started",
      coach: "Siddharth",
      trainer: "Deepa Rao",
    },
    {
      cohortCode: "ADM22DF001",
      startDate: "01 Nov 2021",
      currentStatus: "Ongoing",
      coach: "Sneha Iyer",
      trainer: "Nikhil Gupta",
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
