import { Component } from "react";
import axios from "axios";
import "./App.scss";
import forest from "./assets/videos/forest.mp4";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact component={HomePage} />
            <Route path="/inspiration" component={InspirePage} /> */}
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
