import { Component } from "react";
import axios from "axios";

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
      <section className="App">
        {this.state.welcome && this.state.welcome}
      </section>
    );
  }
}

export default App;
