import "./InspirePage.scss";

import { v4 as uuidv4 } from "uuid";
import hero from "../../assets/images/hero.png";
import { objArray as images } from "../../data/images";
import weeklyInspire from "../../assets/images/weeklynspiration.png";
import footer from "../../assets/images/footer.png";

export const InspirePage = ({ handleClick }) => {
  return (
    <div>
      <img className="hero" src={hero} />
      <section className="inspiration">
        <div className="inspiration__gallery">
          <h2 className="inspiration__gallery-heading"> Featured Creators</h2>
          {images.map((obj) => {
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
