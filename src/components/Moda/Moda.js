import React from 'react';
import ModaRow from './ModaRow';

import './Moda.css';

export default function Moda() {
  return (
    <div className="moda">
      <h2>MODA</h2>

      <div className="moda-list">
        <ModaRow title="TEXTURA FEMENINO" path="texturafem" />
        <ModaRow title="TEXTURA MASCULINO" path="texturamasc" />
        <ModaRow title="BE ONE" path="beone" />
        <ModaRow title="SPORTWEAR" path="sportwear" />
        <ModaRow title="VALKHÚ" path="valkhu" />
        <ModaRow title="CONCEPTO SHOWROOM" path="conceptomoda" />
      </div>
    </div>
  );
}
