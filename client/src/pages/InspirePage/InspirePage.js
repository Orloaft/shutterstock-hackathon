import "./InspirePage.scss";
import navbartop from "../../assets/images/navbartop.png";
import navbarside from "../../assets/images/sidenavbar.png";
import allthings from "../../assets/images/allthings.png";
import appNyc from "../../assets/images/app_nyc.png";
import benjaminBoat from "../../assets/images/benjamin-boat.jpg";
import benjaminLake from "../../assets/images/benjamin-lake.jpg";
import davidClode from "../../assets/images/david-clode.jpg"
import elephant from "../../assets/images/elephant.png";
import exploreNorway from "../../assets/images/explore_norway.png";
import howlingRed from "../../assets/images/howling-red.jpg";
import joshConnor from "../../assets/images/josh-connor.jpg";
import kimsonDoan from "../../assets/images/kimson-doan.jpg";
import madsSchemidt from "../../assets/images/mads-schmidt.jpg";
import matthewHamilton from "../../assets/images/matthew-hamilton.jpg";
import memories from "../../assets/images/memories.jpg";
import mobilePrint from "../../assets/images/mobile-printing.jpeg";
import modernGirl from "../../assets/images/modern_browngirl.png";
import mountainApp from "../../assets/images/mountain_app.png";
import plantPage from "../../assets/images/plantsandjars.png";
import poto from "../../assets/images/poto.jpg"
import sanderDon from "../../assets/images/sander-don.jpg";
import sarahDor from "../../assets/images/sarah-dorweiler.jpg";
import sebastianTurtle from "../../assets/images/sebastian-turtle.gif"; 
import srilanka from "../../assets/images/sri_lanka.png";
import turtle from "../../assets/images/turtle.jpg";

const imageArray = [mountainApp, allthings, srilanka, memories, appNyc, sebastianTurtle, elephant, exploreNorway, poto];

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
