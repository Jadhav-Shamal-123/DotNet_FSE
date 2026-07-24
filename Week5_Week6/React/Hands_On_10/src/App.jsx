import "./index.css";

function App() {

  const office = {
    name: "Tech Park Office",
    rent: 55000,
    address: "Hinjewadi Phase 1, Pune",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  };

  const officeList = [
    {
      name: "Tech Park Office",
      rent: 55000,
      address: "Hinjewadi, Pune",
    },
    {
      name: "Business Bay",
      rent: 70000,
      address: "Baner, Pune",
    },
    {
      name: "Corporate Hub",
      rent: 90000,
      address: "Kharadi, Pune",
    },
    {
      name: "Startup Space",
      rent: 45000,
      address: "Wakad, Pune",
    },
  ];

  return (
    <div className="container">

      <h1>Office Space Rental App</h1>

      <img
        src={office.image}
        alt="Office Space"
        width="500"
      />

      <h2>Featured Office</h2>

      <p>
        <strong>Name:</strong> {office.name}
      </p>

      <p
        style={{
          color: office.rent < 60000 ? "red" : "green",
          fontWeight: "bold",
        }}
      >
        Rent: ₹{office.rent}
      </p>

      <p>
        <strong>Address:</strong> {office.address}
      </p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.name}</h3>

          <p
            style={{
              color: item.rent < 60000 ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            Rent: ₹{item.rent}
          </p>

          <p>{item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;