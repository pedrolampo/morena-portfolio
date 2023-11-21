import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialesRow({ title, path }) {
  return (
    <>
      <div className="sociales-category">
        <Link to={`/sociales/${path}`}>
          <div className="sociales-item">
            <img
              src={require(`../SingleSociales/media/images/${path}/1.jpg`)}
              alt="Sociales Category"
            />
            <h3 className="sociales-title">{title}</h3>
          </div>
        </Link>
      </div>
    </>
  );
}
