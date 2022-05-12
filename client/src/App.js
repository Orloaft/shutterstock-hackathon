import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    welcome: null,
  };
  componentDidMount() {}

  render() {
    return (
      <section className="App">
        {this.state.welcome && this.state.welcome}
      </section>
    );
  }
}

export default App;
