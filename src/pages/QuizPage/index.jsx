import React from "react";
import questions from "../../data/questions";
import "./styles.css";
import srcImagem from "../../img/welcome.png";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function QuizPage() {
  const { user, setUser } = useContext(UserContext);
  const [score, setScore] = useState(0);
  const [showscore, setShowScore] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    let timeLeftColor = document.querySelector(".time-left");
    if (timeLeft < 10) {
      timeLeftColor.style.color = "red";
    }

    if (timeLeft === 0) {
      toast.error("TEMPO ESGOTADO!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeLeft(60);
      timeLeftColor.style.color = "#fff";
      setCurrentQuestion(currentQuestion + 1);
    }
    return () => clearInterval(interval);
  }, [timeLeft]);

  function handleAnswer(isCorrect, index) {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 === questions.questions.length) {
      setShowScore(true);
    }

    setCurrentQuestion(currentQuestion + 1);
    setTimeLeft(60);
  }

  return (
    <div className="quizPage-container">
      <ToastContainer />
      {showscore ? (
        <div className="score-section">
          <div className="apresentation-score">
            <img src={srcImagem} alt="imgBrain" />
            <h1 className="quiz-title">VOCÊ CONCLUIU O QUIZ! </h1>
            <span className="cor">
              {score === questions.questions.length
                ? `Parabens ${user}, você acertou todas as ${score} `
                : `Você pontuou ${score} `}
              de {questions.questions.length}
            </span>
          </div>
        </div>
      ) : (
        <>
          <main className="content-container">
            <div className="pergunta">
              {user ? user : "Usuario"},{" "}
              {questions.questions[currentQuestion].question}
            </div>

            <div className="resposta">
              {questions.questions[currentQuestion].answers.map(
                (answer, index) => (
                  <div className={"grupoResposta"}>
                    <button
                      key={index}
                      onClick={() => {
                        handleAnswer(answer.correct, index);
                      }}
                    >
                      {answer.option}
                    </button>
                  </div>
                )
              )}
            </div>
            <div className="question-section ">
              <button
                className="BtnReinicio"
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setTimeLeft(60);
                }}
              >
                Reiniciar
              </button>
              <span>
                Questão {currentQuestion + 1}/{questions.questions.length}
              </span>
              <div className="time-left">TEMPO: {timeLeft} </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default QuizPage;
