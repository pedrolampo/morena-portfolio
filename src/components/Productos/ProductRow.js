import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductRow({ title, path }) {
  return (
    <>
      <div className="product-category">
        <Link to={`/productos/${path}`}>
          <div className="product-item">
            <img
              src={require(`../SingleProd/media/images/${path}/1.jpg`)}
              alt="Product Category"
            />
            <h3 className="product-title">{title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}
