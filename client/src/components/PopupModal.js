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
      <div className={toggleModal}>
        <div className="modal">
          <img onClick={handleClick} className="modal__image" src={image}></img>
        </div>
      </div>
    </>
  );
}

export default PopupModal;
