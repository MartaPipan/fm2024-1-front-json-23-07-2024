import React, { useState, useRef, useCallback } from 'react';
import ratingCustomersData from './data/ratingCustomersData.json';
import FiveStars from './FiveStars';
import styles from './RatingCustomers.module.sass';

const RatingCustomers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  // Função para rolar para o índice especificado
  const scrollToIndex = useCallback((index) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / ratingCustomersData.comments.length;
      scrollRef.current.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth',
      });
    }
  }, []);

  // Função para lidar com o clique no botão "anterior"
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0
        ? ratingCustomersData.comments.length - 1
        : prevIndex - 1;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  // Função para lidar com o clique no botão "próximo"
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === ratingCustomersData.comments.length - 1
        ? 0
        : prevIndex + 1;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  // Função para renderizar cada comentário
  const renderComment = (review, index) => (
    <div className={styles.comment} key={index}>
      <FiveStars rating={review.rating} />
      <p>{review.comment}</p>
      <h3>{review.author}</h3>
    </div>
  );

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
      <section className={styles.ratings} ref={scrollRef}>
        {ratingCustomersData.comments.map(renderComment)}
      </section>
    </section>
  );
};

export default RatingCustomers;
