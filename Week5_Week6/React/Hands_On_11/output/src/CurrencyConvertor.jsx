import React from "react";

class CurrencyConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      euro: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // demonstrates using `this` and SyntheticEvent
  handleChange(event) {
    // event is a SyntheticEvent in React
    this.setState({ amount: event.target.value });
    console.log("SyntheticEvent type:", event.type);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.amount === "") {
      alert("Please enter amount in INR");
      return;
    }

    const rate = 90; // 1 Euro = 90 INR
    const euro = (parseFloat(this.state.amount) / rate).toFixed(2);

    this.setState({ euro });

    // show result and demonstrate access to `this`
    alert("Converting to Euro Amount is " + euro);
  }

  render() {
    return (
      <form className="converter-form" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <label>Amount:</label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
            placeholder=""
          />
        </div>

        <div className="form-row">
          <label>Currency:</label>
          <input
            type="text"
            value={"Euro"}
            readOnly
          />
        </div>

        <div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>

        {this.state.euro !== "" && (
          <h2 style={{ marginTop: "20px" }}>Euro (€): {this.state.euro}</h2>
        )}
      </form>
    );
  }
}

export default CurrencyConvertor;
