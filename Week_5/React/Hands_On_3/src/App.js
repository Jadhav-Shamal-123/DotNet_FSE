import "./App.css";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Shamal Jadhav"
        School="ABC School"
        Total={450}
        Goal={5}
      />
    </div>
  );
}

export default App;