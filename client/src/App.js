import { Component } from "react";
import axios from "axios";
import "./App.scss";

class App extends Component {
  state = {
    welcome: null,
  };
  componentDidMount() {
    axios.get("http://localhost:8080").then((result) => {
      console.log(result.data);
      this.setState({ welcome: result.data });
    });
  }

  render() {
    return (
      <section className="app">
        {this.state.welcome && this.state.welcome}
      </section>
    );
  }
}

export default App;
