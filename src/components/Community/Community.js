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
                <a
                  href="https://www.instagram.com/morenasanchezfoto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt={e} src={require(`./media/images/${e}1.jpg`)} />
                </a>

                <a
                  href="https://www.instagram.com/morenasanchezfoto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt={e} src={require(`./media/images/${e}2.jpg`)} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
