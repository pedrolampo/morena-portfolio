import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './utils/scrollToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Productos from './components/Productos/Productos';
import Gastronomia from './components/Gastronomia/Gastronomia';
import Moda from './components/Moda/Moda';
import Sociales from './components/Sociales/Sociales';
// import Community from './components/Community/Community';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SingleProd from './components/SingleProd/SingleProd';
import SingleGastro from './components/SingleGastro/SingleGastro';
import SingleModa from './components/SingleModa/SingleModa';
import SingleSociales from './components/SingleSociales/SingleSociales';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header title="Morena Sanchez" subtitle="Fotógrafa" />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/inicio" element={<Main />} />
          <Route exact path="/productos" element={<Productos />} />
          <Route path="/productos/:prodId" element={<SingleProd />} />
          <Route exact path="/gastronomia" element={<Gastronomia />} />
          <Route path="/gastronomia/:gastroId" element={<SingleGastro />} />
          <Route exact path="/moda" element={<Moda />} />
          <Route path="/moda/:modaId" element={<SingleModa />} />
          <Route exact path="/sociales" element={<Sociales />} />
          <Route path="/sociales/:socialesId" element={<SingleSociales />} />
          {/* <Route exact path="/community" element={<Community />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
