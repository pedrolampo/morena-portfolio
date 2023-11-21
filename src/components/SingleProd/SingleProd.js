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
      case 'optica':
        setProduct('OPTICA 20/20');
        break;
      case 'kuba':
        setProduct('KUBA STORE');
        break;
      case 'msprint':
        setProduct('MS PRINT');
        break;
      case 'iracy':
        setProduct('IRACY ALMACÉN NATURAL');
        break;
      case 'famangio':
        setProduct('FAMANGIO');
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
      {fullScreen && (
        <FullScreen
          hide={setFullScreen}
          src={fullScreenImg}
          path="SingleProd"
        />
      )}
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
        <img
          src={require(`./media/images/${prodId}/5.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/5.jpg`)}
        />
        <img
          src={require(`./media/images/${prodId}/6.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/6.jpg`)}
        />
        <img
          src={require(`./media/images/${prodId}/7.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/7.jpg`)}
        />
        <img
          src={require(`./media/images/${prodId}/8.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/8.jpg`)}
        />
        <img
          src={require(`./media/images/${prodId}/9.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/9.jpg`)}
        />
        <img
          src={require(`./media/images/${prodId}/10.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/10.jpg`)}
        />
        <img
          src={require(`./media/images/${prodId}/11.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/11.jpg`)}
        />
        <img
          src={require(`./media/images/${prodId}/12.jpg`)}
          alt={product}
          onClick={() => handleFullScreen(`${prodId}/12.jpg`)}
        />
      </div>
    </div>
  );
};

export default SingleProd;
