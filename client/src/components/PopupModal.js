import React from "react";
import "./PopupModal.scss";

function PopupModal({ show, image, handleClick }) {
  //logic to show or hide the Modal
  const toggleModal = show ? "modal--display" : "modal--hide";

  if (!show) {
    return;
  }

  return (
    <>
      <div className={`wrapper ${show ? "" : "wrapper--hide"}`}></div>
      <div className={`modal ${toggleModal}`}>
        <button onClick={handleClick} className="close">
          X
        </button>
        <img className="modal__image" src={image}></img>
        <aside className="modal__info">
          {" "}
          Ultra creamy avocado pesto cashew banh mi salad rolls salted Chinese
          five-spice powder chili pepper mint lime taco salsa cozy cinnamon
          oatmeal grapefruit overflowing berries crumbled lentils smoky maple
          tempeh glaze apricot black beans mediterranean tasty asian pear
          cinnamon creamiest dragon fruit salty green pepper Italian linguine
          puttanesca mocha chocolate plums cozy butternut Indian spiced. Soup
          red curry tofu noodles enchiladas winter Bolivian rainbow pepper green
          grapes farro platter paprika green tea cranberry spritzer chocolate
          peanut butter dip Caribbean red habanero cinnamon toast leek
          mediterranean luxury bowl main course fruit smash salad bite sized
          tofu burritos. Simmer roasted peanuts oranges garlic sriracha noodles
          pine nuts peaches artichoke hearts thyme creamy cauliflower alfredo
          sauce apple vinaigrette green onions earl grey latte rich coconut
          cream shallots roasted brussel sprouts portobello mushrooms elderberry
          overflowing coconut milk frosted gingerbread bites.{" "}
        </aside>
      </div>
    </>
  );
}

export default PopupModal;
