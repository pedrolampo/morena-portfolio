import React from 'react';
import GastronomiaRow from './GastronomiaRow';

import './Gastronomia.css';

export default function Gastronomia() {
  return (
    <div className="gastronomia">
      <h2>FOTO PRODUCTO</h2>

      <div className="gastronomia-list">
        <GastronomiaRow title="NOMADE" path="nomade" />
        <GastronomiaRow title="PASTILANDIA" path="pastilandia" />
        <GastronomiaRow title="MILISANT CHOCOLATES" path="milisant" />
      </div>
    </div>
  );
}
