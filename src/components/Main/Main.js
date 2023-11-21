import React from 'react';
import { Link } from 'react-router-dom';

import './Main.css';

export default function Main() {
  return (
    <div className="main-screen">
      <div className="main-content">
        <div className="main-content-image">
          <Link to={'/productos'}>
            <img
              src={require('../../common/media/images/PRODUCTO.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <h2>FOTO PRODUCTO</h2>
      </div>

      <div className="main-content">
        <div className="main-content-image">
          <Link to={'/moda'}>
            <img
              src={require('../../common/media/images/GASTRONOMIA.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <h2>GASTRONOMÍA</h2>
      </div>

      <div className="main-content">
        <div className="main-content-image">
          <Link to={'/moda'}>
            <img
              src={require('../../common/media/images/MODA.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <h2>MODA</h2>
      </div>

      <div className="main-content">
        <div className="main-content-image">
          <Link to={'/moda'}>
            <img
              src={require('../../common/media/images/SOCIAL.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <h2>SOCIALES</h2>
      </div>
    </div>
  );
}
