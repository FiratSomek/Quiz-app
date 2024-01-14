import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { QuizComplexity } from "../../types/QuizComplexity";

interface Props {
  setQuizComplexity: React.Dispatch<React.SetStateAction<QuizComplexity|undefined>>;
}

export const Header: React.FC<Props> = ({
  setQuizComplexity
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography
        sx={{ textAlign: "center", color: "#fff", marginTop: "20px" }}
        variant="h2"
      >
        Quiz
      </Typography>
      <Typography
        sx={{ textAlign: "center", marginTop: "80px", color: "#fff" }}
        variant="h4"
      >
        Choose the difficulty level
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={8}
        marginTop="50px"
      >
        <Link to={"/quizpage"}>
          {" "}
          <Button
            color="success"
            size="large"
            variant="contained"
            onClick={() => setQuizComplexity(QuizComplexity.EASY)}
          >
            Easy
          </Button>
        </Link>
        <Link to={"/quizpage"}>
          {" "}
          <Button
            size="large"
            variant="contained"
            onClick={() => setQuizComplexity(QuizComplexity.MEDIUM)}
          >
            Medium
          </Button>
        </Link>
        <Link to={"/quizpage"}>
          {" "}
          <Button
            color="error"
            size="large"
            variant="contained"
            onClick={() => setQuizComplexity(QuizComplexity.HARD)}
          >
            Hard
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};
