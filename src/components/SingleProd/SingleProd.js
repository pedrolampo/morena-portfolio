import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './SingleProd.css';

const SingleProd = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { prodId } = useParams();

  useEffect(() => {
    switch (prodId) {
      case 'vicenta':
        setProduct('VICENTA AROMAS');
        setLoading(false);
        break;
      case 'palotes':
        setProduct('PALOTES SIERRAS APART');
        setLoading(false);
        break;
      case 'textura':
        setProduct('TEXTURA: DISEÑO EN TELAR');
        setLoading(false);
        break;
      case 'msprint':
        setProduct('MS PRINT');
        setLoading(false);
        break;
      case 'iracy':
        setProduct('IRACY ALMACÉN NATURAL');
        setLoading(false);
        break;
      case 'concepto':
        setProduct('CONCEPTO SHOWROOM');
        setLoading(false);
        break;

      default:
        break;
    }
  }, [prodId]);

  if (loading) {
    return <section className="product">test</section>;
  } else {
    return (
      <div>
        <h2>{product}</h2>
      </div>
    );
  }
};

export default SingleProd;
