import React from "react";
import questions from "../../data/questions";
import "./styles.css";
import srcImagem from "../../img/welcome.png";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";

function QuizPage() {
  const { user } = useContext(UserContext);

  const [score, setScore] = useState(0);
  const [showscore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [colorAnswer, setColorAnswer] = useState("");
  const [timeButton, setTimeButton] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft < 10) {
      let timeLeft = document.querySelector(".time-left");
      timeLeft.style.color = "red";
    }

    if (timeLeft === 0) {
      alert("Tempo Esgotado!");
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(60);
    }
    return () => clearInterval(interval);
  }, [timeLeft]);



  
  function handleAnswer(isCorrect, index) {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    setColorAnswer(isCorrect ? "certo" : "errado");

    if (currentQuestion + 1 === questions.questions.length) {
      setShowScore(true);
    }
    setCurrentQuestion(currentQuestion + 1);
    setTimeLeft(60);
  }
  return (
    <div className="quizPage-container">
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
              {questions.questions[currentQuestion].question}
            </div>

            <div className="resposta">
              {questions.questions[currentQuestion].answers.map(
                (answer, index) => (
                  <div className={"grupoResposta"}>
                    <button
                      className={colorAnswer}
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
