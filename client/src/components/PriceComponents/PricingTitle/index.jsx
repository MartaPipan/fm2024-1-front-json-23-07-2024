import React, { useRef, useState } from 'react';
import styles from './PricingTitle.module.sass';
import pricingTitleData from './data/pricingTitleData.json';
import { Oval } from 'react-loader-spinner';

const PricingTitle = () => {
  const { title, description, buttons } = pricingTitleData;
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleScrollLeft = () => {
    handleScroll('left');
  };

  const handleScrollRight = () => {
    handleScroll('right');
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / buttons.length;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -itemWidth : itemWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleClick = (index) => {
    setActiveButton(index === activeButton ? null : index);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const renderSpinner = () => (
    <div className={styles.spinnerContainer}>
      <Oval
        height={80}
        width={80}
        color="#3498db"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#f3f3f3"
        strokeWidth={2}
        strokeWidthSecondary={2}

      />
    </div>
  );

  const buttonElements = buttons.map((button, index) => (
    <button
      key={index}
      className={`${styles.pricingButton} ${activeButton === index ? styles.active : ''}`}
      onClick={() => handleClick(index)}
    >
      {button.text}
    </button>
  ));

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
          onClick={handleScrollLeft}
        />
        <div className={styles.buttons} ref={scrollRef}>
          {buttonElements}
        </div>
        <input
          type="image"
          src="./public/staticImages/next-blue.svg"
          alt="Scroll Right"
          className={`${styles.scrollButton} ${styles.scrollRight}`}
          onClick={handleScrollRight}
        />
      </div>
      {loading && renderSpinner()}
    </div>
  );
};

export default PricingTitle;
