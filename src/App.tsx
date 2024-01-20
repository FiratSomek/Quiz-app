import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { QuizBoard } from "./components/QuizBoard/QuizBoard";
import { Header } from "./components/Header/Header";
import backgroundImg from "./assets/mt-fuji-sea-of-clouds-sunrise-46253.jpeg";
import { QuizDataItem, quizData } from "./data";
import { QuizComplexity } from "./types/QuizComplexity";

export const App = () => {
  const [questions, setQuestions] = useState<QuizDataItem[]>(quizData);
  const [quizComplexity, setQuizComplexity] = useState<
    QuizComplexity | undefined
  >();

  return (
    <div
      style={{
        display: "flex",
        width: "700px",
        height: "500px",
        border: "3px solid black",
        borderRadius: "10px",
        boxShadow: "10px 10px 20px black",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        padding: "20px",
      }}
    >
      <Routes>
        <Route
          path="/"
          element={<Header setQuizComplexity={setQuizComplexity} />}
        />
        <Route
          path="/quizpage"
          element={
            <>
              {quizComplexity === QuizComplexity.EASY && (
                <QuizBoard
                  setQuizComplexity={setQuizComplexity}
                  questions={questions.filter(
                    (q) => q.difficulty === quizComplexity
                  )}
                />
              )}
              {quizComplexity === QuizComplexity.MEDIUM && (
                <QuizBoard
                  setQuizComplexity={setQuizComplexity}
                  questions={questions.filter(
                    (q) => q.difficulty === quizComplexity
                  )}
                />
              )}
              {quizComplexity === QuizComplexity.HARD && (
                <QuizBoard
                  setQuizComplexity={setQuizComplexity}
                  questions={questions.filter(
                    (q) => q.difficulty === quizComplexity
                  )}
                />
              )}
            </>
          }
        />
      </Routes>
    </div>
  );
};
