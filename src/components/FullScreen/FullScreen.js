import React from 'react';

import './FullScreen.css';

export default function FullScreen({ hide, src }) {
  return (
    <div className="full-screen">
      <div className="close-btn" onClick={() => hide(false)}>
        &times;
      </div>
      <img
        className="full-screen-img"
        src={require(`../SingleProd/media/images/${src}`)}
        alt="Full Screen"
      />
    </div>
  );
}
