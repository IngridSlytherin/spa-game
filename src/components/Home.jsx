import React from 'react';

function Home() {
  return (
    <div className="home">
      <h2>Bem-vindo ao Notícias Gamer!</h2>
      <p>Fique por dentro das últimas novidades do mundo dos games, lançamentos, atualizações, eventos e muito mais.</p>

      <div className="banner">
        <img src={`${process.env.PUBLIC_URL}/imagens/gta6.jpg`} alt="Banner GTA 6" />
      </div>

      <h3>Destaques da Semana</h3>
      <div className="destaques">
        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/imagens/gta6.jpg`} alt="GTA 6" />
          <h4>🚗 GTA VI: Vazamentos indicam novo trailer em breve!</h4>
          <p>Fique ligado! A Rockstar pode liberar novidades nos próximos dias.</p>
        </div>

        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/imagens/fortnite.jpg`} alt="Fortnite" />
          <h4>🔥 Fortnite lança modo sobrevivência inédito!</h4>
          <p>O novo modo está levando os jogadores à loucura com desafios insanos.</p>
        </div>

        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/imagens/road-rash.jpg`} alt="The Legend" />
          <h4>🎮 The Legend of Heroes chega com gráficos incríveis!</h4>
          <p>Um RPG que está conquistando fãs no mundo inteiro.</p>
        </div>

        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/imagens/gta6.jpg`} alt="GTA 6" />
          <h4>🚗 GTA VI: Vazamentos indicam novo trailer em breve!</h4>
          <p>Fique ligado! A Rockstar pode liberar novidades nos próximos dias.</p>
        </div>

        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/imagens/fortnite.jpg`} alt="Fortnite" />
          <h4>🔥 Fortnite lança modo sobrevivência inédito!</h4>
          <p>O novo modo está levando os jogadores à loucura com desafios insanos.</p>
        </div>

        <div className="card">
          <img src={`${process.env.PUBLIC_URL}/imagens/road-rash.jpg`} alt="The Legend" />
          <h4>🎮 The Legend of Heroes chega com gráficos incríveis!</h4>
          <p>Um RPG que está conquistando fãs no mundo inteiro.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
