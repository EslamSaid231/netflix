import React from "react";

const TCard = ({
  item: { name, rating, time, desc, cover, starring, genres, tags },
}) => {
  return (
    <div>
      <div className="MovieBox Trending">
        <div className="img">
          <img src={cover} alt="/" />
        </div>
        <div className="text">
          <h3>{name.toUpperCase()}</h3>
          <div className="details row"></div>
          <div className="rating flex">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half"></i>
          </div>
          <span>Rating: {rating}</span>
          <div>
            <span>Time: {time}</span>
          </div>
          <div className="descriptionTrend">
            <span>{desc}</span>
          </div>
          <div className="starring">
            <span>Starring: {starring}</span>
          </div>
          <div>
            <span>Genre: {genres}</span>
          </div>
          <div>
            <span>Tags: {tags}</span>
          </div>
          <div className="play-btn">
            <button className="primary-btn">
              <i className="fa fa-play"></i>PLAY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCard;
