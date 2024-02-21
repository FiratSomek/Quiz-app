import { Typography, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { QuizComplexity } from "../../types/QuizComplexity";
import { QuestionOption, QuizDataItem, quizData } from "../../data";

interface Props {
  questions: QuizDataItem[];
  setQuizComplexity: React.Dispatch<
    React.SetStateAction<QuizComplexity | undefined>
  >;
  setQuestions: React.Dispatch<React.SetStateAction<QuizDataItem[]>>;
}

enum OptionClass {
  correct,
  wrong,
}

export const QuizBoard: React.FC<Props> = ({
  setQuizComplexity,
  questions,
  setQuestions,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number | undefined>(undefined);

  const handleAnswer = (answer: QuestionOption) => {
    const updatedOptions = questions[currentQuestion].options.map((option) => {
      if (answer.title === option.title) {
        if (option.title === questions[currentQuestion].correct_answer) {
          return { ...option, class: OptionClass[0] };
        } else {
          return { ...option, class: OptionClass[1] };
        }
      } else if (option.title === questions[currentQuestion].correct_answer) {
        return { ...option, class: OptionClass[0] };
      }
      return option;
    });
    setUserAnswers([...userAnswers, answer.title]);
    const updatedCurrentQuestion = {
      ...questions[currentQuestion],
      options: updatedOptions,
    };
    const updatedQuestions = questions.map((question) => {
      if (question.question === updatedCurrentQuestion.question) {
        return updatedCurrentQuestion;
      }
      return question;
    });
    setQuestions(updatedQuestions);

    if (currentQuestion + 1 < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        calculateScore();
        setShowResult(true);
      }, 2000);
    }
  };
  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correct_answer) {
        score++;
      }
    }
    setScore(score);
  };
  const handleReset = () => {
    setQuizComplexity(undefined);
    setQuestions(quizData);
  };
  return (
    <div className="quiz-board">
      {showResult ? (
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography variant="h2">Quiz App</Typography>
          <Typography variant="h4">
            Your scored <span style={{ color: "lightgreen" }}>{score}</span> out
            out of {questions.length}
          </Typography>
          <Link to="/" onClick={handleReset}>
            <Button variant="contained">RESET GAME</Button>
          </Link>
        </div>
      ) : (
        <>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Question {currentQuestion + 1}
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginLeft: "20px", marginTop: "50px" }}
          >
            {" "}
            Q. {questions[currentQuestion].question}
          </Typography>
          <ul>
            {" "}
            {questions[currentQuestion].options.map(
              (option: QuestionOption) => (
                <li
                  className={`option-list ${option.class}`}
                  key={option.title}
                  onClick={() => handleAnswer(option)}
                >
                  <Typography variant="h5" sx={{ marginLeft: "20px" }}>
                    {option.title}
                  </Typography>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </div>
  );
};
