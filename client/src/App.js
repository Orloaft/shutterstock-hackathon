import { Component } from "react";
import axios from "axios";
import "./App.scss";
import forest from "./assets/videos/forest.mp4";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { InspirePage } from "./pages/InspirePage/InspirePage";
import PopupModal from "./components/PopupModal";

class App extends Component {
  state = {
    show: false,
    imagePopup: null,
  };
  componentDidMount() {
    axios.get("http://localhost:8080").then((result) => {
      console.log(result.data);
      this.setState({ welcome: result.data });
    });
  }

  showModal = (image) => {
    this.setState({
      show: true,
      imagePopup: image,
    });
  };

  hideModal = () => {
    this.setState({ show: false, imagePopup: null });
  };

  render() {
    return (
      <section className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/inspiration"
              render={() => {
                return <InspirePage handleClick={this.showModal} />;
              }}
            />
          </Switch>
          <PopupModal
            show={this.state.show}
            handleClose={this.hideModal}
            image={this.state.imagePopup}
          />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
