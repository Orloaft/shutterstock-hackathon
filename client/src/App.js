import { Component } from "react";
import axios from "axios";
import "./App.scss";
import forest from "./assets/videos/forest.mp4";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { InspirePage } from "./pages/InspirePage/InspirePage";
import PopupModal from "./components/PopupModal";
import navbartop from "./assets/images/navbartop.png";
import navbarside from "./assets/images/sidenavbar.png";

class App extends Component {
  state = {
    show: false,
    imagePopup: null,
  };

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
        {/* <div
          className={`wrapper ${this.state.show ? "" : "wrapper--hide"}`}
        ></div> */}
        <header className="navbar">
          <img className="navbar__top" src={navbartop} />
          <img />
          <nav className="navbar__left-container">
            <img className="navbar__left" src={navbarside} />
          </nav>
        </header>
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
            image={this.state.imagePopup}
            handleClick={this.hideModal}
          />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
