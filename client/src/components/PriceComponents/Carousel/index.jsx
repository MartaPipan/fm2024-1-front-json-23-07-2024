import React, { useState } from 'react';
import ratingCustomersData from "../RatingCustomers/data/ratingCustomersData.json";
import styles from './Carousel.module.sass'; // Certifique-se de que o caminho está correto

const Carousel = () => {
  const comments = ratingCustomersData.comments;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrevious} className={styles.navButton}>Left</button>
      <div className={styles.comment}>
        <p>{comments[currentIndex].comment}</p>
        <p><strong>{comments[currentIndex].author}</strong></p>
      </div>
      <button onClick={handleNext} className={styles.navButton}>Right</button>
    </div>
  );
};

export default Carousel;
