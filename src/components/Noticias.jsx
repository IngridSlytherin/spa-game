import React from 'react';

function Noticias() {
  const noticias = [
    {
      titulo: '🚀 GTA VI pode ser anunciado em breve!',
      imagem: 'imagens/gta6.jpg',
    },
    {
      titulo: '🔥 Fortnite ganha modo inédito de sobrevivência.',
      imagem: 'imagens/fortnite.jpg',
    },
    {
      titulo: '🎮 The Legend of Heroes chega amanhã!',
      imagem: 'imagens/road-rash.jpg',
    },
  ];

  return (
    <div>
      <h2>Últimas Notícias</h2>
      <div className="noticias">
        {noticias.map((noticia, index) => (
          <div key={index} className="card">
            <img src={`${process.env.PUBLIC_URL}/${noticia.imagem}`} alt={noticia.titulo} />
            <h3>{noticia.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;
