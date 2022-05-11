import React, { useState } from 'react';

import './FullScreen.css';

export default function FullScreen({ hide, src, path }) {
  const [source, setSource] = useState(src);
  const [delay, setDelay] = useState(false);

  document.body.classList.add('stop-scroll');

  document.addEventListener('keydown', (e) => {
    if (delay) return;
    if (e.key === 'ArrowLeft') {
      handleGoLeft();
      setDelay(true);
      setTimeout(() => setDelay(false), 200);
    }
    if (e.key === 'ArrowRight') {
      handleGoRight();
      setDelay(true);
      setTimeout(() => setDelay(false), 200);
    }
    if (e.key === 'Escape') {
      hide(false);
      document.body.classList.remove('stop-scroll');
    }
  });

  const handleGoLeft = () => {
    if (source.includes('1')) setSource(source.replace('1', '4'));
    if (source.includes('2')) setSource(source.replace('2', '1'));
    if (source.includes('3')) setSource(source.replace('3', '2'));
    if (source.includes('4')) setSource(source.replace('4', '3'));
  };

  const handleGoRight = () => {
    if (source.includes('1')) setSource(source.replace('1', '2'));
    if (source.includes('2')) setSource(source.replace('2', '3'));
    if (source.includes('3')) setSource(source.replace('3', '4'));
    if (source.includes('4')) setSource(source.replace('4', '1'));
  };

  return (
    <div className="full-screen">
      <div
        className="close-btn"
        onClick={() => {
          hide(false);
          document.body.classList.remove('stop-scroll');
        }}
      >
        &times;
      </div>
      <button className="left-btn" onClick={handleGoLeft}>
        &#8249;
      </button>
      <img
        className="full-screen-img"
        src={require(`../${path}/media/images/${source}`)}
        alt="Full Screen"
      />
      <button className="right-btn" onClick={handleGoRight}>
        &#8250;
      </button>
    </div>
  );
}
