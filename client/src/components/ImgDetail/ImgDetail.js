import React from "react";
import "./ImgDetail.scss";
import copyIcon from "../../assets/images/copyicon.png";

function ImgDetail({ handleClick, author, stockImage }) {
  return (
    <div>
      <h3>Download this image</h3>
      <img className="detail__image" src={stockImage} />
      <div>
        <h4 className="detail__title">Image size / Format</h4>
        <div className="detail__container">
          <p className="detail__detail">Large - 8688 x 5792 pixels</p>
          <p className="detail__detail">29 x 19 inch - 300 DPI -JPG </p>
        </div>
        <div>
          <div className="detail__item-info">
            <p>Item Id: 2124865324</p>
            <img className="detail__copyicon" src={copyIcon} />
          </div>
          <p>
            Creator: <span className="detail__name">{author}</span>
          </p>
          <a
            className="detail__price"
            href="https://www.shutterstock.com/pricing"
          >
            View our pricing and subscription plans
          </a>
        </div>
        <div className="detail__buttons-container">
          <button className="detail__buttonDownload">Download</button>
          <button className="detail__buttonCancel" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImgDetail;
