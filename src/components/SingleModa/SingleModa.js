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
      case 'coco':
        setModa('COCO MUII');
        break;
      case 'kuba':
        setModa('KUBA STORE');
        break;
      case 'textura':
        setModa('TEXTURA');
        break;
      case 'famangio':
        setModa('FAMANGIO');
        break;
      case 'beone':
        setModa('BE ONE');
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
        <img
          src={require(`./media/images/${modaId}/5.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/5.jpg`)}
        />
        <img
          src={require(`./media/images/${modaId}/6.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/6.jpg`)}
        />
        <img
          src={require(`./media/images/${modaId}/7.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/7.jpg`)}
        />
        <img
          src={require(`./media/images/${modaId}/8.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/8.jpg`)}
        />
        <img
          src={require(`./media/images/${modaId}/9.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/9.jpg`)}
        />
        <img
          src={require(`./media/images/${modaId}/10.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/10.jpg`)}
        />
        <img
          src={require(`./media/images/${modaId}/11.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/11.jpg`)}
        />
        <img
          src={require(`./media/images/${modaId}/12.jpg`)}
          alt={moda}
          onClick={() => handleFullScreen(`${modaId}/12.jpg`)}
        />
      </div>
    </div>
  );
}
