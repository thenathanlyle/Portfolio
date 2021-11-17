import MotionGIFs from "../assets/MotionGIFs.png";
import "./Project1.css";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { createTheme } from "@mui/material/styles";

export default function Project1() {
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
    <div className="project1">
      <img className="p1Image" src={MotionGIFs} alt="" />
      <h1 className="p1Title">MotionGIFs</h1>
      <Stack direction="row" spacing={1} className="test">
        <Chip label="Made with:" />
        <Chip label="React" variant="outlined" />
        <Chip label="Rails" variant="outlined" />
        <Chip label="MUI" variant="outlined" />
        <Chip label="Axios" variant="outlined" />
      </Stack>
      <p className="p1Body">
        MotionGIFs is full-stack app built with full CRUD on both posts and
        comments, with user authentication and authorization.
      </p>
      <Stack direction="row" spacing={2} className="p1Buttons">
        <Button
          theme={theme}
          color="primary"
          variant="contained"
          href="https://motiongifs.netlify.app/"
          target="_blank"
        >
          Visit Demo
        </Button>
        <Button
          theme={theme}
          color="secondary"
          variant="outlined"
          href="https://github.com/thenathanlyle/MotionGIFs"
          target="_blank"
        >
          GitHub
        </Button>
      </Stack>
    </div>
  );
}
