import React from 'react';
import PricingTitle from './PricingTitle';
import FAQ from './FAQ';
import RatingCustomers from './RatingCustomers';
import PackageOptions from './PackagesOptions';
import FindBrand from "./FindBrand"


const PriceComponent = () => (
  <div>
    <PricingTitle />
    <PackageOptions />
    <RatingCustomers/>
    <FAQ />
    <FindBrand/>
  </div>
);

export default PriceComponent;
