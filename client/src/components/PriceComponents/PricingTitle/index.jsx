import React, { useRef } from 'react';
import styles from './PricingTitle.module.sass';
import pricingTitleData from './data/pricingTitleData.json';

const PricingTitle = () => {
  const { title, description, buttons } = pricingTitleData;
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / buttons.length;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -itemWidth : itemWidth,
        behavior: 'smooth',
      });
    }
  };

  const renderButtons = () => {
    return buttons.map((button, index) => (
      <button key={index} className={styles.pricingButton}>
        {button.text}
      </button>
    ));
  };

  return (
    <div className={styles.pricingTitle}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles.buttonsContainer}>
        <input
          type="image"
          src="./public/staticImages/prev-blue.svg"
          alt="Scroll Left"
          className={`${styles.scrollButton} ${styles.scrollLeft}`}
          onClick={() => handleScroll('left')}
        />
        <div className={styles.buttons} ref={scrollRef}>
          {renderButtons()}
        </div>
        <input
          type="image"
          src="./public/staticImages/next-blue.svg"
          alt="Scroll Right"
          className={`${styles.scrollButton} ${styles.scrollRight}`}
          onClick={() => handleScroll('right')}
        />
      </div>
    </div>
  );
};

export default PricingTitle;
