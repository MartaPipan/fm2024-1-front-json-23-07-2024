import React, { useState } from 'react';
import searchNamesData from './data/searchData.json';
import styles from './SearchNames.module.sass';

const SearchNames = () => {
  const { searchBar, popularSearch } = searchNamesData.structure;

  const [searchItems, setSearchItems] = useState(searchBar.search);
  const [arrowItems, setArrowItems] = useState(searchBar.arrow);
  const [buttonText, setButtonText] = useState(searchBar.button.text);
  const [popularButtons, setPopularButtons] = useState(popularSearch.buttons);

  return (
    <div className={styles.searchNames}>
      <div className={styles.searchBar}>
        {searchItems.map((item, index) => (
          <a href={item.link} key={index} className={styles.searchItem}>
            <img src={item.image} alt={item.alt} />
          </a>
        ))}
        <input
          name="search"
          type="text"
          placeholder={buttonText}
          className={styles.searchButton}
        />
        {arrowItems.map((item, index) => (
          <a href={item.link} key={index}>
            <img
              className={styles.nextCircle}
              src={item.image}
              alt={item.alt}
            />
          </a>
        ))}
      </div>
      <div className={styles.popularSearch}>
        <span className={styles.popularText}>{popularSearch.text}</span>
        <div className={styles.searchButtons}>
          {popularSearch.buttons.map((button, index) => (
            <a href={button.link} key={index}>
              <button className={styles.popularButton}>{button.text}</button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchNames;
