import "./App.css";
import QuizPage from "./pages/QuizPage";
import WelcomePage from "./pages/WelcomePage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes >
      <Route path="/" element={<WelcomePage />} />
      <Route path="/Quiz" element={<QuizPage />} />
    </Routes>
  );
}

export default App;
