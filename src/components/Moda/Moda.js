import React from 'react';
import ModaRow from './ModaRow';

import './Moda.css';

export default function Moda() {
  return (
    <div className="moda">
      <h2>MODA</h2>

      <ModaRow title="TEXTURA FEMENINO" />
      <ModaRow title="TEXTURA MASCULINO" />
      <ModaRow title="BE ONE" />
      <ModaRow title="SPORTWEAR" />
      <ModaRow title="VALKHÚ" />
      <ModaRow title="CONCEPTO SHOWROOM" />
    </div>
  );
}
