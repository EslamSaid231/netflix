import React from "react";

const LatestCard = ({ item: { id, cover, name, time } }) => {
  return (
    <div>
      <div className="MovieBox">
        <div className="Latest">
          <div className="latestImg">
            <img src={cover} alt="/" />
          </div>
          <div className="text">
            <h3>{name.toUpperCase()}</h3>
            <span>{time}</span>
            <button className="primary">
              <i className="fa fa-play"></i>
              PLAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
