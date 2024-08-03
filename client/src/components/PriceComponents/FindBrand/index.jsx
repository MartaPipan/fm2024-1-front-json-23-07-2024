import React from 'react';
import Find from './Find';
import WhyAtom from './WhyAtom';
import styles from './FindBrand.module.sass';

const FindBrand = () => {
  return (
      <section className={styles.container}>
        <Find />
        <WhyAtom />
      </section>
  
  );
};

export default FindBrand;
