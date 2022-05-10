import React from 'react';
import { Link } from 'react-router-dom';

import './Main.css';

export default function Main() {
  return (
    <div className="main-screen">
      <h2>FOTO PRODUCTO</h2>
      <div className="main-content">
        <div className="main-content-image">
          <Link to={'/productos'}>
            <img
              src={require('../../common/media/images/iracy.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/productos'}>
            <img
              src={require('../../common/media/images/vicenta.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/productos'}>
            <img
              src={require('../../common/media/images/concepto.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/productos'}>
            <img
              src={require('../../common/media/images/milisant.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
      </div>

      <h2>MODA</h2>
      <div className="main-content">
        <div className="main-content-image">
          <Link to={'/moda'}>
            <img
              src={require('../../common/media/images/texturafem.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/moda'}>
            <img
              src={require('../../common/media/images/valkhu.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/moda'}>
            <img
              src={require('../../common/media/images/beone.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/moda'}>
            <img
              src={require('../../common/media/images/concepto2.jpg')}
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
