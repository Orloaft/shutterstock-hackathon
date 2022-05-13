import React from "react";
import "./PopupModal.scss";
import ImgDetail from '../components/ImgDetail/ImgDetail';
import scoring from '../assets/images/scoring.png';
import iconsPop from '../assets/images/iconsPop.png';

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
        <div className="modal__container">
        <button onClick={handleClick} className="close">
          X
        </button>
        <div className="modal__image-container">
        <img className="modal__image" src={image}></img>
        <img className="modal__score" src={scoring}/>
        </div>
        <aside className="modal__info">
          <ImgDetail handleClick={handleClick}/>
        </aside>
        </div>
        <div className='modal__footer'>
          <img className='modal__footer-icons' src={iconsPop}/>
        </div>
      </div>
    </>
  );
}

export default PopupModal;
