import JayWalkin from "../assets/JayWalkin.png";
import "./Project2.css";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";

export default function Project2() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFCC00",
      },
      secondary: {
        main: "#000000",
      },
    },
  });
  return (
    <div className="project2">
      <img className="p2Image" src={JayWalkin} alt="" />
      <h1 className="p2Title">JayWalkin</h1>
      <p className="p2Body">
        JayWalkin is an E-commerce site built to allow users to browse through a
        collection of shoes. The site was built in a team environment and
        features full CRUD. JayWalkin offers the functionalities of filtering,
        searching, and sorting different products.
      </p>
      <div className="p2Buttons">
        <Stack direction="row" spacing={2}>
          <Button
            theme={theme}
            color="primary"
            variant="contained"
            href="https://jaywalkin.netlify.app/"
            target="_blank"
          >
            Visit Demo
          </Button>
          <Button
            theme={theme}
            color="secondary"
            variant="outlined"
            href="https://github.com/thenathanlyle/jay-walkin"
            target="_blank"
          >
            GitHub
          </Button>
        </Stack>
      </div>
    </div>
  );
}
