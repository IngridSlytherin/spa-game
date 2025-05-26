import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Noticias from './components/Noticias';
import Contato from './components/Contato';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/spa-game">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
