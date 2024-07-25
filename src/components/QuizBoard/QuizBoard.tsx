import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
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

export enum OptionClass {
  Correct = "correct",
  Wrong = "wrong",
}

export const QuizBoard: React.FC<Props> = ({
  setQuizComplexity,
  questions,
  setQuestions,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number>(0);

<<<<<<< HEAD
  const handleAnswer = (e: any, answer: any) => {
    const correctAnswer = questions[currentQuestion].correct_answer;
    const isCorrect = answer === correctAnswer;
    if (isCorrect) {
      e.currentTarget.classList.add("correct");
    } else {
      e.target.classList.add("wrong");
      document.querySelectorAll(".option-list").forEach((option: any) => {
        if (option.innerText === correctAnswer) {
          option.classList.add("correct");
=======
  useEffect(() => {
    if (showResult) {
      let score = 0;
      for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correct_answer) {
          score++;
>>>>>>> branch_2
        }
      }
      setScore(score);
    }
  }, [showResult, questions, userAnswers]);

  const handleAnswer = (answer: QuestionOption) => {
    const isAnswerCorrect = !!(
      questions[currentQuestion].correct_answer === answer.title
    );

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
        setShowResult(true);
      }, 2000);
    }
  };

  const handleReset = () => {
    setQuizComplexity(undefined);
    setQuestions(quizData);
    setScore(0);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResult(false);
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
<<<<<<< HEAD
            {questions[currentQuestion].options.map((option: any) => (
              <li
                className={"option-list"}
                key={option.index}
                onClick={(e) => handleAnswer(e, option)}
              >
                <Typography variant="h5" sx={{ marginLeft: "20px" }}>
                  {option.title}
                </Typography>
              </li>
            ))}
=======
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
>>>>>>> branch_2
          </ul>
        </>
      )}
    </div>
  );
};
