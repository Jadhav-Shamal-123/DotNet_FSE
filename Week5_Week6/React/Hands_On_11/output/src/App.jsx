// import { useState } from "react";
// import "./index.css";

// function App() {
//   const [count, setCount] = useState(5);
//   const [amount, setAmount] = useState("");
//   const [currency, setCurrency] = useState("");

//   const handleIncrement = () => setCount((c) => c + 1);
//   const handleDecrement = () => setCount((c) => c - 1);

//   const sayWelcome = () => {
//     alert("Hello! Member!");
//   };

//   const handleClickMe = () => {
//     alert("Click event fired");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // simple placeholder behaviour: show an alert with entered values
//     alert(`Amount: ${amount}\nCurrency: ${currency || "N/A"}`);
//   };

//   return (
//     <div className="page-wrap">
//       <div className="top-bar">
//         <div className="counter-number">{count}</div>

//         <div className="top-controls">
//           <button onClick={handleIncrement}>Increment</button>
//           <button onClick={handleDecrement}>Decrement</button>
//           <button onClick={sayWelcome}>Say welcome</button>
//           <button onClick={handleClickMe}>Click on me</button>
//         </div>
//       </div>

//       <main className="main-content">
//         <h1 className="converter-title">Currency Convertor!!!</h1>

//         <form className="converter-form" onSubmit={handleSubmit}>
//           <div className="form-row">
//             <label>Amount:</label>
//             <input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder=""
//             />
//           </div>

//           <div className="form-row">
//             <label>Currency:</label>
//             <input
//               type="text"
//               value={currency}
//               onChange={(e) => setCurrency(e.target.value)}
//               placeholder=""
//             />
//           </div>

//           <div>
//             <button className="submit-btn" type="submit">
//               Submit
//             </button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import "./index.css";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(5);
  

  // Method 1
  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  // Method 2
  const sayHello = () => {
    alert("Hello! Member!");
  };

  // Increment button calls multiple methods
  const handleIncrement = () => {
    incrementCounter();
    sayHello();
  };

  // Decrement
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  // Welcome with argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic Event
  const handleClickMe = (event) => {
    alert("I was clicked");
    console.log(event); // SyntheticEvent object
  };

  // CurrencyConvertor is now a separate component (class-based)

  return (
    <div className="page-wrap">
      <div className="top-bar">
        <div className="counter-number">{count}</div>

        <div className="top-controls">
          <button onClick={handleIncrement}>Increment</button>

          <button onClick={handleDecrement}>Decrement</button>

          <button
            onClick={() => sayWelcome("Welcome")}
          >
            Say Welcome
          </button>

          <button onClick={handleClickMe}>
            Click on me
          </button>
        </div>
      </div>

      <main className="main-content">
        <h1 className="converter-title">
          Currency Convertor!!!
        </h1>

        <CurrencyConvertor />
      </main>
    </div>
  );
}

export default App;