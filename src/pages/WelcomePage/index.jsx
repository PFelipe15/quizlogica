import React from "react";
import { Link } from "react-router-dom";
import srcImagem from "../../img/welcome.png";
import "./styles.css";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
function WelcomePage() {
  const { user, setUser } = useContext(UserContext);

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

            <div class="form">
              <input
                type="text"
                name="text"
                autocomplete="off"
                required
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
              <label for="text" class="label-name">
                <span class="content-name">SEU NOME</span>
              </label>
            </div>
            <Link to={"/Quiz"}>
              <button className="btnWelcome">COMEÇAR</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
