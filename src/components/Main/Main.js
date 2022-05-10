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
              src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w1000-b21109mU6Jt8eSFV.jpg"
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/productos'}>
            <img
              src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w1000-b21109mU6Jt8eSFV.jpg"
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/productos'}>
            <img
              src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w1000-b21109mU6Jt8eSFV.jpg"
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/productos'}>
            <img
              src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w1000-b21109mU6Jt8eSFV.jpg"
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
              src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w1000-b21109mU6Jt8eSFV.jpg"
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/moda'}>
            <img
              src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w1000-b21109mU6Jt8eSFV.jpg"
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/moda'}>
            <img
              src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w1000-b21109mU6Jt8eSFV.jpg"
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
        <div className="main-content-image">
          <Link to={'/moda'}>
            <img
              src="https://dglb26w8rx2ld.cloudfront.net/000_clients/3033794/page/w1000-b21109mU6Jt8eSFV.jpg"
              alt="Imágenes Foto Producto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
