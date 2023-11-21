import React from 'react';
import SocialesRow from './SocialesRow';

import './Sociales.css';

export default function Sociales() {
  return (
    <div className="sociales">
      <h2>SOCIALES</h2>

      <div className="sociales-list">
        <SocialesRow title="CERCA DE VOS" path="cerca" />
        <SocialesRow title="PARAWAY" path="paraway" />
        <SocialesRow title="JULO & BANDA" path="julo" />
        <SocialesRow title="BODA JUANA & FRANCO" path="bodajuana" />
        <SocialesRow title="IGNACIO ROURKE" path="rourke" />
        <SocialesRow title="PRE BODA SERE & RAMI" path="prebodasere" />
        <SocialesRow
          title="MATERNIDAD GIULI & MARCOS"
          path="maternidadmarcos"
        />
      </div>
    </div>
  );
}
