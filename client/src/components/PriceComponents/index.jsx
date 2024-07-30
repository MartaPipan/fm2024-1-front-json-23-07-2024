import React from 'react';
import PricingTitle from './PricingTitle';
import FAQ from './FAQ';
import RatingCustomers from './RatingCustomers';
import PackageOptions from './PackagesOptions';
import Carousel from './Carousel';



const PriceComponent = () => (
  <div>
    <PricingTitle />
    <PackageOptions />
    <RatingCustomers/>
    <FAQ />
    <Carousel/>
  </div>
);

export default PriceComponent;
