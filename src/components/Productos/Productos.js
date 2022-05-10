import React from 'react';
import ProductRow from './ProductRow';

import './Productos.css';

export default function Productos() {
  return (
    <div className="products">
      <h2>FOTO PRODUCTO</h2>

      <ProductRow title="VICENTA AROMAS" />
      <ProductRow title="PALOTES SIERRAS APART" />
      <ProductRow title="TEXTURA: DISEÑO EN TELAR" />
      <ProductRow title="MS PRINT" />
      <ProductRow title="IRACY ALMACÉN NATURAL" />
      <ProductRow title="CONCEPTO SHOWROOM" />
    </div>
  );
}
