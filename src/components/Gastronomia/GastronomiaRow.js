import React from 'react';
import { Link } from 'react-router-dom';

export default function GastronomiaRow({ title, path }) {
  return (
    <>
      <div className="gastronomia-category">
        <Link to={`/gastronomia/${path}`}>
          <div className="gastronomia-item">
            <img
              src={require(`../SingleGastro/media/images/${path}/1.jpg`)}
              alt="Gastronomia Category"
            />
            <h3 className="gastronomia-title">{title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}
