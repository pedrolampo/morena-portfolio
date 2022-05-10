import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/Main/Main';
import Productos from './components/Productos/Productos';
import Moda from './components/Moda/Moda';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

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
          <Route exact path="/moda" element={<Moda />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
