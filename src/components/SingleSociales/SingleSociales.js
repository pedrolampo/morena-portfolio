import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FullScreen from '../FullScreen/FullScreen';

import './SingleSociales.css';

const SingleSociales = () => {
  const [sociales, setSociales] = useState();
  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenImg, setFullScreenImg] = useState('');

  const { socialesId } = useParams();

  useEffect(() => {
    switch (socialesId) {
      case 'coco':
        setSociales('COCO MUII');
        break;
      case 'paraway':
        setSociales('PARAWAY');
        break;
      case 'julo':
        setSociales('JULO _ BANDA');
        break;
      case 'bodajuana':
        setSociales('BODA JUANA_FRANCO');
        break;
      case 'rourke':
        setSociales('IGNACIO ROURKE');
        break;
      case 'prebodasere':
        setSociales('PRE BODA SERE_RAMI');
        break;
      case 'maternidadmarcos':
        setSociales('MATERNIDAD GIULI_MARCOS');
        break;

      default:
        break;
    }
  }, [socialesId]);

  const handleFullScreen = (src) => {
    setFullScreen(true);
    setFullScreenImg(src);
  };

  return (
    <div className="single-sociales">
      {fullScreen && (
        <FullScreen
          hide={setFullScreen}
          src={fullScreenImg}
          path="SingleProd"
        />
      )}
      <h2>{sociales}</h2>
      <div className="photos">
        <img
          src={require(`./media/images/${socialesId}/1.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/1.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/2.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/2.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/3.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/3.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/4.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/4.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/5.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/5.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/6.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/6.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/7.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/7.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/8.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/8.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/9.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/9.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/10.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/10.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/11.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/11.jpg`)}
        />
        <img
          src={require(`./media/images/${socialesId}/12.jpg`)}
          alt={sociales}
          onClick={() => handleFullScreen(`${socialesId}/12.jpg`)}
        />
      </div>
    </div>
  );
};

export default SingleSociales;
