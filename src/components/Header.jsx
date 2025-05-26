import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Notícias Gamer</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/noticias">Notícias</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
