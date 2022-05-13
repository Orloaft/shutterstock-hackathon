import "./InspirePage.scss";
import navbartop from "../../assets/images/navbartop.png";
import navbarside from "../../assets/images/sidenavbar.png";
import icon from "../../assets/images/icon.png";

export const InspirePage = () => {
  return (
    <div>
      <img className="navbar__top" src={navbartop} />
      <section className="inspiration">
        <div className="inspiration__hero">
          <input
            type="text"
            className="inspiration__search"
            placeholder="Search"
          ></input>
        </div>
        <div className="inspiration__gallery">
          <img
            className="inspiration__image"
            src={icon}
            alt="shutterstock icon"
          ></img>
          <img
            className="inspiration__image"
            src={icon}
            alt="shutterstock icon"
          ></img>
          <img
            className="inspiration__image"
            src={icon}
            alt="shutterstock icon"
          ></img>
          <img
            className="inspiration__image"
            src={icon}
            alt="shutterstock icon"
          ></img>
          <img
            className="inspiration__image"
            src={icon}
            alt="shutterstock icon"
          ></img>
          <img
            className="inspiration__image"
            src={icon}
            alt="shutterstock icon"
          ></img>
          <img
            className="inspiration__image"
            src={icon}
            alt="shutterstock icon"
          ></img>
          <img
            className="inspiration__image"
            src={icon}
            alt="shutterstock icon"
          ></img>
          <img
            className="inspiration__image"
            src={icon}
            alt="shutterstock icon"
          ></img>
        </div>
      </section>
      <img className="navbar__left" src={navbarside} />
    </div>
  );
};
