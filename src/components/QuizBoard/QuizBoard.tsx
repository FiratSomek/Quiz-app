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

export enum OptionClass { Correct = 'correct', Wrong = 'wrong', };

export const QuizBoard: React.FC<Props> = ({
  setQuizComplexity,
  questions,
  setQuestions,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number>(0);

  const handleAnswer = (answer: QuestionOption) => {
    const isAnswerCorrect = !!(questions[currentQuestion].correct_answer === answer.title);

    const updatedOptions = questions[currentQuestion].options.map((option) => {
      if (answer.title === option.title) {
        if (isAnswerCorrect) {
          return { ...option, class: OptionClass.Correct };
        } else {
          return { ...option, class: OptionClass.Wrong };
        }
      } else if (option.title === questions[currentQuestion].correct_answer) {
        return { ...option, class: OptionClass.Correct };
      }
      return option;
    });
    // TODO: I think the state userAnswers should not be needed as long as we add correct/wrong class to the questions state
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

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 2000);
    }
  };

  const handleReset = () => {
    setQuizComplexity(undefined);
    setQuestions(quizData);
    setScore(0);
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
