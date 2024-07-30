import React from 'react';
import styles from "./FiveStars.module.sass"

const FiveStars = () => (
  <div>
    {[...Array(5)].map((_, index) => (
      <img 
        key={index}
        src="./public/staticImages/pricePackageImage/star.svg" 
        alt="star" 
      />
    ))}
  </div>
);

export default FiveStars;
