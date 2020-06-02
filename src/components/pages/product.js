import React from 'react';
import ProductInfo from '../productInfo/productInfo';

const ProductPage = (props) => {
  console.log(props);
  return (
    <div className="ProductPage">
      <ProductInfo data={props} />
    </div>
  );
};

export default ProductPage;
