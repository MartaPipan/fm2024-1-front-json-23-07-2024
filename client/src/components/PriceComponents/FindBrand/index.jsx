import React from 'react';
import Find from './Find';
import WhyAtom from './WhyAtom';
import styles from './FindBrand.module.sass';

const FindBrand = () => {
    return (
        <div className={styles.container}>
            <Find/>
            <WhyAtom />
        </div>
    );
};

export default FindBrand;
