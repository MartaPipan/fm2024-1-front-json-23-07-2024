import React from 'react';
import packagesData from './data/packagesData.json';
import styles from './PackageOptions.module.sass';

const renderSubItems = (subItems) => (
  <ul className={styles.subItems}>
    {subItems.map((subItem, j) => (
      <li key={j} className={styles.subItem}>
        <img src="./public/staticImages/pricePackageImage/yes.png" alt="check-circle" />
        <span className={styles.tooltip}>
          {subItem.text}
          <span className={styles.tooltiptext}>{subItem.comment}</span>
        </span>
      </li>
    ))}
  </ul>
);

const renderItems = (items) => (
  <ul className={styles.items}>
    {items.map((item, i) => (
      <li key={i} className={styles.item}>
        <img src="./public/staticImages/pricePackageImage/tick.png" alt="tick" />
        {item.text}
        {item.subItems && renderSubItems(item.subItems)}
      </li>
    ))}
  </ul>
);

const getPackageClass = (name) => styles[name.toLowerCase()];

const renderPackage = (pkg, index) => (
  <div key={index} className={`${styles.package} ${getPackageClass(pkg.name)}`}>
    <img src={pkg.image} alt={pkg.alt} />
    <h2>{pkg.name}</h2>
    <p>{pkg.title}</p>
    <h3>{pkg.price}</h3>
    <button>{pkg.button}<img src="./public/staticImages/next-white.svg" alt="next" /></button>
    {renderItems(pkg.items)}
  </div>
);

const renderPackages = () => (
  packagesData.map((pkg, index) => renderPackage(pkg, index))
);

const PackagesOptions = () => {

  const packageList = renderPackages();

  return (
    <section className={styles.packages}>
      {packageList}
    </section>
  );
};

export default PackagesOptions;
