import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Productos from './components/Productos/Productos';
import Moda from './components/Moda/Moda';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SingleProd from './components/SingleProd/SingleProd';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title="Morena Sanchez" subtitle="Fotógrafa" />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/inicio" element={<Main />} />
          <Route exact path="/productos" element={<Productos />} />
          <Route path="/productos/:prodId" element={<SingleProd />} />
          <Route exact path="/moda" element={<Moda />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
