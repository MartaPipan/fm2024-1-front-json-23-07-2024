import React, { useState } from 'react';
import ratingCustomersData from './data/ratingCustomersData.json';
import FiveStars from './FiveStars';
import styles from './RatingCustomers.module.sass';


const renderComments = (comments, currentIndex) => {
  return [0, 1, 2].map(i => {
    const index = (currentIndex + i) % comments.length;
    const { rating, comment, author } = comments[index];
    return (
      <div className={styles.comment} key={index}>
        <FiveStars rating={rating} />
        <p>{comment}</p>
        <h3>{author}</h3>
      </div>
    );
  });
};


const RatingCustomers = () => {
  const comments = ratingCustomersData.comments;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  return (
    <section className={styles.customers}>
      <div className={styles.header}>
        <img
          src="./public/staticImages/pricePackageImage/star-white.svg"
          alt="star"
          className={styles.headerStar}
        />
        <span className={styles.review}>{ratingCustomersData.review}</span>
        <span className={styles.from}>{ratingCustomersData.from}</span>
        <input
          type="image"
          src="./public/staticImages/prev-blue.svg"
          alt="prev"
          className={`${styles.scroll} ${styles.scrollLeft}`}
          onClick={handlePrevClick}
        />
        <input
          type="image"
          src="./public/staticImages/next-blue.svg"
          alt="next"
          className={`${styles.scroll} ${styles.scrollRight}`}
          onClick={handleNextClick}
        />
      </div>
      <div className={styles.ratings}>
        {renderComments(comments, currentIndex)}
      </div>
    </section>
  );
};

export default RatingCustomers;
