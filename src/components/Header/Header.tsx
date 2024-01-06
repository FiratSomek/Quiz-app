import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  setIsHard: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEasy: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMedium: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({
  setIsHard,
  setIsEasy,
  setIsMedium,
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
            onClick={() => setIsEasy(true)}
          >
            Easy
          </Button>
        </Link>
        <Link to={"/quizpage"}>
          {" "}
          <Button
            size="large"
            variant="contained"
            onClick={() => setIsMedium(true)}
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
            onClick={() => setIsHard(true)}
          >
            Hard
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};
