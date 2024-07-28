import React from 'react';
import PricingTitle from './PricingTitle';
import FAQ from './FAQ';
import RatingCustomers from './RatingCustomers';
import PackageOptions from './PackagesOptions';



const PriceComponent = () => (
  <div>
    <PricingTitle />
    <PackageOptions />
    <FAQ />
    <RatingCustomers />
  </div>
);

export default PriceComponent;
