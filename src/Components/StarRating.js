import React, { useState } from "react";

const StarRating = ({ Rating }) => {
  const array = [
    { Stars: "&#9733;" },
    { Stars: "&#9733; &#9733;" },
    { Stars: "&#9733; &#9733; &#9733;" },
    { Stars: "&#9733; &#9733; &#9733; &#9733;" },
    { Stars: "&#9733; &#9733; &#9733; &#9733; &#9733;" },
  ];

  return (
    <div>
      {array.map((stars, index) => {
        let { Rating } = index;
        <span>{stars[Math.floor({ Rating })].Stars}</span>;
      })}
    </div>
  );
};

export default StarRating;
