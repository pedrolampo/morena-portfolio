import React from 'react';

export default function ProductRow({ title }) {
  return (
    <>
      <div className="product-category">
        <div className="product-item">
          <img
            src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w400-w21292tLCywAMFtN.jpg"
            alt="Product Category"
          />
          <h3 className="product-title">{title}</h3>
        </div>
      </div>
    </>
  );
}
