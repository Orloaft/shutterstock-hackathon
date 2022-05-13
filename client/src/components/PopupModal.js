import React from "react";
import "./PopupModal.scss";

function PopupModal({ show }) {
  //logic to show or hide the Modal
  const toggleModal = show ? "modal--display" : "modal--hide";

  if (!show) {
    return;
  }

  return (
    <>
      <div className={toggleModal}>
        <div className="modal"></div>
      </div>
    </>
  );
}

export default PopupModal;
