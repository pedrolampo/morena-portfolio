import React from 'react';

import './Community.css';

export default function Community() {
  const brands = ['vicenta', 'textura', 'ms print', 'sasitogames'];

  return (
    <div className="cm-main">
      <h2>COMMUNITY MANAGER</h2>
      <div className="cm-section">
        {brands.map((e) => {
          return (
            <div key={e} className="cm-brand">
              <h3>{e.toUpperCase()}</h3>
              <div className="cm-images">
                <div className="cm-img-container">
                  <img alt={e} src={require(`./media/images/${e}1.jpg`)} />
                </div>

                <div className="cm-img-container">
                  <img alt={e} src={require(`./media/images/${e}2.jpg`)} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
