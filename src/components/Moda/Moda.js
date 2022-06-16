import React from 'react';
import ModaRow from './ModaRow';

import './Moda.css';

export default function Moda() {
  return (
    <div className="moda">
      <h2>MODA</h2>

      <div className="moda-list">
        <ModaRow title="KUBA STORE" path="kuba" />
        <ModaRow title="TEXTURA" path="textura" />
        <ModaRow title="BE ONE" path="beone" />
        <ModaRow title="FAMANGIO" path="famangio" />
      </div>
    </div>
  );
}
