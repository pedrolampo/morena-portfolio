import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getDocs,
  collection,
  query,
  where,
  getDoc,
  doc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCD8ZdxnRFrBUdiFgHvB_s0xNHFhGfW3kU',
  authDomain: 'portfolio-5bf30.firebaseapp.com',
  projectId: 'portfolio-5bf30',
  storageBucket: 'portfolio-5bf30.appspot.com',
  messagingSenderId: '305844203780',
  appId: '1:305844203780:web:7bedb35b470260f8662051',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getProds = (key, op, value) => {
  return new Promise((res, rej) => {
    const collectionQuery =
      key && op && value
        ? query(collection(db, 'products'), where('category', '==', value))
        : collection(db, 'products');

    getDocs(collectionQuery)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        res(products);
      })
      .catch((err) => {
        rej(`Error al obtener los productos: ${err}`);
      });
  });
};

export const getSingleProd = (value) => {
  return new Promise((res, rej) => {
    getDoc(doc(db, 'products', value))
      .then((querySnapshot) => {
        const product = {
          id: querySnapshot.id,
          ...querySnapshot.data(),
        };
        res(product);
      })
      .catch((err) => {
        rej(`Error al obtener el producto: ${err}`);
      });
  });
};
