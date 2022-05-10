import React from 'react';

export default function ProductRow({ title }) {
  return (
    <>
      <div className="moda-category">
        <div className="moda-item">
          <img
            src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w400-k21292BnmNCaF2iS.jpg"
            alt="Moda Category"
          />
          <h3 className="moda-title">{title}</h3>
        </div>
        <div className="moda-item">
          <img
            src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w400-k21292BnmNCaF2iS.jpg"
            alt="Moda Category"
          />
        </div>
        <div className="moda-item">
          <img
            src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w400-k21292BnmNCaF2iS.jpg"
            alt="Moda Category"
          />
        </div>
        <div className="moda-item">
          <img
            src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w400-k21292BnmNCaF2iS.jpg"
            alt="Moda Category"
          />
        </div>
      </div>
    </>
  );
}
