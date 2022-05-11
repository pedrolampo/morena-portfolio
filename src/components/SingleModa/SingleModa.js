import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import FullScreen from '../FullScreen/FullScreen';
import '../SingleProd/SingleProd.css';

export default function SingleModa() {
  const [moda, setModa] = useState();
  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenImg, setFullScreenImg] = useState('');

  const { modaId } = useParams();

  useEffect(() => {
    switch (modaId) {
      case 'texturafem':
        setModa('TEXTURA FEMENINO');
        break;
      case 'texturamasc':
        setModa('TEXTURA MASCULINO');
        break;
      case 'beone':
        setModa('BE ONE');
        break;
      case 'sportwear':
        setModa('SPORTWEAR');
        break;
      case 'valkhu':
        setModa('VALKHÚ');
        break;
      case 'conceptomoda':
        setModa('CONCEPTO SHOWROOM');
        break;

      default:
        break;
    }
  }, [modaId]);

  const handleFullScreen = (src) => {
    setFullScreen(true);
    setFullScreenImg(src);
  };

  return (
    <div className="single-product">
      {fullScreen && (
        <FullScreen
          hide={setFullScreen}
          src={fullScreenImg}
          path="SingleModa"
        />
      )}
      <h2>{moda}</h2>
      <div className="photos">
        <img
          src={require(`./media/images/${modaId}/1.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/1.jpg`)}
        />
        <img
          src={require(`./media/images/${modaId}/2.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/2.jpg`)}
        />
        <img
          src={require(`./media/images/${modaId}/3.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/3.jpg`)}
        />
        <img
          src={require(`./media/images/${modaId}/4.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/4.jpg`)}
        />
      </div>
    </div>
  );
}
