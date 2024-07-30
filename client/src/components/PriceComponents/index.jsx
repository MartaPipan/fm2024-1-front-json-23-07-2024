import React from 'react';
import PricingTitle from './PricingTitle';
import FAQ from './FAQ';
import RatingCustomers from './RatingCustomers';
import PackageOptions from './PackagesOptions';



const PriceComponent = () => (
  <div>
    <PricingTitle />
    <PackageOptions />
    <RatingCustomers/>
    <FAQ />
  </div>
);

export default PriceComponent;
