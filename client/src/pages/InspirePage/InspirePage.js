import "./InspirePage.scss";

import { v4 as uuidv4 } from "uuid";
import hero from "../../assets/images/hero.png";
import allthings from "../../assets/images/allthings.png";
import appNyc from "../../assets/images/app_nyc.png";
import exploreNorwayStock from "../../assets/images/benjamin-boat.jpg";
import allthingsStock from "../../assets/images/benjamin-lake.jpg";
import elephantStock from "../../assets/images/david-clode.jpg";
import elephant from "../../assets/images/elephant.png";
import exploreNorway from "../../assets/images/explore_norway.png";
import potoStock from "../../assets/images/howling-red.jpg";
import appNycStock from "../../assets/images/josh-connor.jpg";
import kimsonDoan from "../../assets/images/kimson-doan.jpg";
import mountainAppStock from "../../assets/images/mads-schmidt.jpg";
import matthewHamilton from "../../assets/images/matthew-hamilton.jpg";
import memories from "../../assets/images/memories.jpg";
import memoriesStock from "../../assets/images/mobile-printing.jpeg";
import modernGirl from "../../assets/images/modern_browngirl.png";
import mountainApp from "../../assets/images/mountain_app.png";
import plantPage from "../../assets/images/plantsandjars.png";
import poto from "../../assets/images/poto.jpg";
import srilankaStock from "../../assets/images/sander-don.jpg";
import sarahDor from "../../assets/images/sarah-dorweiler.jpg";
import sebastianTurtle from "../../assets/images/sebastian-turtle.gif";
import srilanka from "../../assets/images/sri_lanka.png";
import sebastianTurtleStock from "../../assets/images/turtle.jpg";
import weeklyInspire from "../../assets/images/weeklynspiration.png";
import footer from "../../assets/images/footer.png";
const objArray = [
  { author: "Mads Shmidt", stock: mountainAppStock, product: mountainApp },
  { author: "Benjamin Lake", stock: allthingsStock, product: allthings },
  { author: "Sander Don", stock: srilankaStock, product: srilanka },
  { author: "Robert Wallace", stock: memoriesStock, product: memories },
  { author: "Josh Connor", stock: appNycStock, product: appNyc },
  {
    author: "Sebastian Turtle",
    stock: sebastianTurtleStock,
    product: sebastianTurtle,
  },
  { author: "David Clode", stock: elephantStock, product: elephant },
  {
    author: "Benjamin Lake",
    stock: exploreNorwayStock,
    product: exploreNorway,
  },
  { author: "Sam Smith", stock: potoStock, product: poto },
];
const imageArray = [
  mountainApp,
  allthings,
  srilanka,
  memories,
  appNyc,
  sebastianTurtle,
  elephant,
  exploreNorway,
  poto,
];

export const InspirePage = ({ handleClick }) => {
  return (
    <div>
      <img className="hero" src={hero} />
      <section className="inspiration">
        <div className="inspiration__gallery">
          <h2 className="inspiration__gallery-heading"> Featured Creators</h2>
          {objArray.map((obj) => {
            return (
              <img
                key={uuidv4()}
                onClick={(e) => {
                  handleClick(obj.stock);
                }}
                className="inspiration__image"
                src={obj.product}
                alt="shutterstock ace"
              ></img>
            );
          })}
        </div>
        <img src={weeklyInspire} className="inspiration__weekly-banner"></img>
        <img src={footer} className="footer"></img>
      </section>
    </div>
  );
};
