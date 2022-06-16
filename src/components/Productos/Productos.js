import React from 'react';
import ProductRow from './ProductRow';

import './Productos.css';

export default function Productos() {
  return (
    <div className="products">
      <h2>FOTO PRODUCTO</h2>

      <div className="products-list">
        <ProductRow title="VICENTA AROMAS" path="vicenta" />
        <ProductRow title="TEXTURA: DISEÑO EN TELAR" path="textura" />
        <ProductRow title="MS PRINT" path="msprint" />
        <ProductRow title="IRACY ALMACÉN NATURAL" path="iracy" />
        <ProductRow title="MILISANT CHOCOLATES" path="milisant" />
        <ProductRow title="DECO & ART" path="deco" />
        <ProductRow title="FAMANGIO" path="famangio" />
      </div>
    </div>
  );
}
