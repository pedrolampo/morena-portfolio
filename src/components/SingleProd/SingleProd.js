import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FullScreen from '../FullScreen/FullScreen';

import './SingleProd.css';

const SingleProd = () => {
  const [product, setProduct] = useState();
  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenImg, setFullScreenImg] = useState('');

  const { prodId } = useParams();

  useEffect(() => {
    switch (prodId) {
      case 'vicenta':
        setProduct('VICENTA AROMAS');
        break;
      case 'palotes':
        setProduct('PALOTES SIERRAS APART');
        break;
      case 'textura':
        setProduct('TEXTURA: DISEÑO EN TELAR');
        break;
      case 'msprint':
        setProduct('MS PRINT');
        break;
      case 'iracy':
        setProduct('IRACY ALMACÉN NATURAL');
        break;
      case 'concepto':
        setProduct('CONCEPTO SHOWROOM');
        break;
      case 'milisant':
        setProduct('MILISANT CHOCOLATES');
        break;
      case 'deco':
        setProduct('DECO & ART');
        break;

      default:
        break;
    }
  }, [prodId]);

  const handleFullScreen = (src) => {
    setFullScreen(true);
    setFullScreenImg(src);
  };

  return (
    <div className="single-product">
      {fullScreen && <FullScreen hide={setFullScreen} src={fullScreenImg} />}
      <h2>{product}</h2>
      <div className="photos">
        <img
          src={require(`./media/images/${prodId}/1.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/1.jpg`)}
        />
        <img
          src={require(`./media/images/${prodId}/2.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/2.jpg`)}
        />
        <img
          src={require(`./media/images/${prodId}/3.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/3.jpg`)}
        />
        <img
          src={require(`./media/images/${prodId}/4.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/4.jpg`)}
        />
      </div>
    </div>
  );
};

export default SingleProd;
