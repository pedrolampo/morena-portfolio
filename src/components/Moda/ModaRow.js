import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductRow({ title, path }) {
  return (
    <>
      <div className="moda-category">
        <Link to={`/moda/${path}`}>
          <div className="moda-item">
            <img
              src={require(`../SingleModa/media/images/${path}/1.jpg`)}
              alt="Moda Category"
            />
            <h3 className="moda-title">{title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}
