import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/Main/Main';
import Productos from './components/Productos/Productos';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title="Morena Sanchez" subtitle="Fotógrafa" />
        <Routes>
          <Route exact path="/inicio" element={<Main />} />
          <Route exact path="/productos" element={<Productos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
