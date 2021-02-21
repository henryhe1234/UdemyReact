import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  

	state = {lat:null,errorMessage:""};

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState!
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  //react says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude:{this.state.lat}</div>;
    } else {
      return <div>Loading</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
