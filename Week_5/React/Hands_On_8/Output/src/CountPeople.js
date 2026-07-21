import React, { Component } from "react";

class CountPeople extends Component {

  constructor() {
    super();

    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState({
      entrycount: this.state.entrycount + 1
    });
  }

  UpdateExit = () => {
    this.setState({
      exitcount: this.state.exitcount + 1
    });
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Mall Counter</h1>

        <h2>People Entered : {this.state.entrycount}</h2>

        <button onClick={this.UpdateEntry}>
          Login
        </button>

        <h2>People Exited : {this.state.exitcount}</h2>

        <button onClick={this.UpdateExit}>
          Exit
        </button>

      </div>
    );
  }
}

export default CountPeople;