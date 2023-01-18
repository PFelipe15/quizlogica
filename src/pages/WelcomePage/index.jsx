import React from "react";
import srcImagem from "../../img/welcome.png";
import "./styles.css";

function WelcomePage() {
  return (
    <div className="welcomePage-container">
      <div className="welcomeContainer ">
        <div className="apresentation-container">
          <img src={srcImagem} alt="imgBrain" />

          <div className="welcomeContainer-title">
            <h1 className="welcome-title">
              TESTE SEUS CONHECIMENTOS EM LOGICA DE PROGRAMAÇÃO RELACIONADO A
              JAVASCRIPT COM O NOSSO QUIZ!
            </h1>
            <a href="/Quiz">
              <button className="btnWelcome">COMEÇAR</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
