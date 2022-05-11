import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductRow({ title, path }) {
  return (
    <>
      <div className="moda-category">
        <Link to={`/moda/${path}`}>
          <div className="moda-item">
            <img
              src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w400-k21292BnmNCaF2iS.jpg"
              alt="Moda Category"
            />
            <h3 className="moda-title">{title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}
