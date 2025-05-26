import React from 'react';

function Contato() {
  return (
    <div className="contato">
      <h2>Entre em Contato</h2>
      <p>Fale conosco! Envie suas sugestões, críticas, elogios ou parcerias.</p>

      <div className="info-contato">
        <p><strong>Email:</strong> <a href="mailto:ingrid_patricia.cp@hotmail.com">contato@noticiasgamer.com</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/5511953369820" target="_blank" rel="noreferrer">Conversar</a></p>
        <p><strong>Instagram:</strong> <a href="https://instagram.com/_ingridpadilha" target="_blank" rel="noreferrer">Ingrid Padilha</a></p>
        <p><strong>Github:</strong> <a href="https://github.com/IngridSlytherin" target="_blank" rel="noreferrer">Repositorios</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ingrid-padilha/" target="_blank" rel="noreferrer">Perfil</a></p>
      </div>

      <div className="formulario">
        <h3>Envie uma mensagem</h3>
        <form>
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Sua mensagem..." required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contato;
