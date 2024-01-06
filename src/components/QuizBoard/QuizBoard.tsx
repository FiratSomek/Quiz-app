import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface Props {
  questions: any[];
  setIsEasy: any;
  setIsMedium: any;
  setIsHard: any;
}

export const QuizBoard: React.FC<Props> = ({
  questions,
  setIsEasy,
  setIsMedium,
  setIsHard,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (e: any, answer: any) => {
    const correctAnswer = questions[currentQuestion].correct_answer;
    const isCorrect = answer === questions[currentQuestion].correct_answer;
    if (isCorrect) {
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("wrong");
      document.querySelectorAll(".option-list").forEach((option: any) => {
        if (option.innerText === correctAnswer) {
          option.classList.add("correct");
        }
      });
    }

    setUserAnswers([...userAnswers, answer]);

    if (currentQuestion + 1 < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        e.target.classList.remove("correct", "wrong");
        document.querySelectorAll(".option-list").forEach((option: any) => {
          option.classList.remove("correct", "wrong");
        });
      }, 1000);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    }
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correct_answer) {
        score++;
      }
    }
    return score;
  };

  const handleReset = () => {
    setIsEasy(false);
    setIsMedium(false);
    setIsHard(false);
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
            Your scored{" "}
            <span style={{ color: "lightgreen" }}>{calculateScore()}</span> out
            of {questions.length}
          </Typography>
          <Link to="/" onClick={handleReset}>
            <Button variant="contained">RESET GAME</Button>
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
            {questions[currentQuestion].options.map((option: any) => (
              <li
                className="option-list "
                key={option.index}
                onClick={(e) => handleAnswer(e, option)}
              >
                <Typography variant="h5" sx={{ marginLeft: "20px" }}>
                  {option}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
