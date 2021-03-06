import "./InspirePage.scss";
import zoom from "../../assets/images/zoom.png";
import { v4 as uuidv4 } from "uuid";
import hero from "../../assets/images/hero.png";
import { objArray as images } from "../../data/images";
import weeklyInspire from "../../assets/images/weeklynspiration.png";
import footer from "../../assets/images/footer.png";
import { FiZoomIn } from "react-icons/fi";

export const InspirePage = ({ handleClick }) => {
  const style = { color: "white", fontSize: "30px" };
  return (
    <div>
      <img className="hero" src={hero} />
      <section className="inspiration">
        <div className="inspiration__gallery">
          <h2 className="inspiration__gallery-heading"> Featured Creators</h2>
          {images.map((obj) => {
            return (
              <div key={uuidv4()} className="inspiration__image-wrapper">
                <button
                  onClick={(e) => {
                    handleClick(obj.product, obj.stock, obj.author);
                  }}
                  className="popup-button"
                >
                  <FiZoomIn style={style} />
                </button>
                <img
                  className="inspiration__image"
                  src={obj.product}
                  alt="shutterstock ace"
                ></img>
              </div>
            );
          })}
        </div>
        <img src={weeklyInspire} className="inspiration__weekly-banner"></img>
        <img src={footer} className="footer"></img>
      </section>
    </div>
  );
};
