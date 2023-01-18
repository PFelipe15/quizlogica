import React from "react";
import questions from "../../data/questions";
import "./styles.css";
import { useState } from "react";
function QuizPage() {
  const [score, setScore] = useState(0);
  const [showscore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    setCurrentQuestion(currentQuestion + 1);

    if (isCorrect === true) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.questions.length - 1) {
      setShowScore(true);
    }
  }
  return (
    <div className="quizPage-container">
      {showscore ? (
        <div className="score-section">
          <div className="apresentation-score">
            <img src="../../src/img/welcome.png" alt="imgBrain" />
            <h1 className="quiz-title">VOCÊ CONCLUIU O QUIZ! </h1>
            <span className="cor">
              Você pontuou{" "}
              {score === questions.questions.length ? score + "👏🏿" : score} de{" "}
              {questions.questions.length}
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
                  <div className="grupoResposta" key={index}>
                    <button onClick={() => handleAnswer(answer.correct)}>
                      {answer.option}
                    </button>
                  </div>
                )
              )}
            </div>
            <div className="question-section ">
              <span>
                Questão {currentQuestion + 1}/{questions.questions.length}
              </span>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default QuizPage;
