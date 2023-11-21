import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FullScreen from '../FullScreen/FullScreen';

import './SingleGastro.css';

const SingleGastro = () => {
  const [gastronomia, setGastronomia] = useState();
  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenImg, setFullScreenImg] = useState('');

  const { gastroId } = useParams();

  useEffect(() => {
    switch (gastroId) {
      case 'nomade':
        setGastronomia('NOMADE');
        break;
      case 'pastilandia':
        setGastronomia('PASTILANDIA');
        break;
      case 'milisant':
        setGastronomia('MILISANT CHOCOLATES');
        break;

      default:
        break;
    }
  }, [gastroId]);

  const handleFullScreen = (src) => {
    setFullScreen(true);
    setFullScreenImg(src);
  };

  return (
    <div className="single-gastronomia">
      {fullScreen && (
        <FullScreen
          hide={setFullScreen}
          src={fullScreenImg}
          path="SingleProd"
        />
      )}
      <h2>{gastronomia}</h2>
      <div className="photos">
        <img
          src={require(`./media/images/${gastroId}/1.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/1.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/2.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/2.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/3.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/3.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/4.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/4.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/5.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/5.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/6.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/6.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/7.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/7.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/8.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/8.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/9.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/9.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/10.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/10.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/11.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/11.jpg`)}
        />
        <img
          src={require(`./media/images/${gastroId}/12.jpg`)}
          alt={gastronomia}
          onClick={() => handleFullScreen(`${gastroId}/12.jpg`)}
        />
      </div>
    </div>
  );
};

export default SingleGastro;
