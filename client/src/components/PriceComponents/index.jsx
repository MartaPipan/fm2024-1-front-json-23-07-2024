import React from 'react';
import PricingTitle from './PricingTitle';
import FAQ from './FAQ';
import RatingCustomers from './RatingCustomers';
import PackageOptions from './PackagesOptions';
import FindBrand from "./FindBrand"
import SearchNames from './SearchNames';


const PriceComponent = () => (
  <div>
    <PricingTitle />
    <PackageOptions />
    <RatingCustomers/>
    <FAQ />
    <FindBrand />
    <SearchNames/>
  </div>
);

export default PriceComponent;
