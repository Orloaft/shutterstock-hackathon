import "./InspirePage.scss";
import navbartop from "../../assets/images/navbartop.png";
import navbarside from "../../assets/images/sidenavbar.png";
import ace from "../../assets/images/ace.svg";
const imageArray = [ace, ace, ace, ace, ace, ace, ace, ace, ace];

export const InspirePage = ({ handleClick }) => {
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
          <h2 className="inspiration__gallery-heading"> Featured Creators</h2>
          {imageArray.map((img) => {
            return (
              <img
                onClick={(e) => {
                  handleClick(img);
                }}
                className="inspiration__image"
                src={img}
                alt="shutterstock ace"
              ></img>
            );
          })}
        </div>
      </section>
      <img className="navbar__left" src={navbarside} />
    </div>
  );
};
