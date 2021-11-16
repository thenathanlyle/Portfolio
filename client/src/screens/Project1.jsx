import MotionGIFs from "../assets/MotionGIFs.png";
import "./Project1.css";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";

export default function Project1() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFCC00",
      },
      secondary: {
        main: "#fafafa",
      },
    },
  });
  return (
    <div className="project1">
      <img className="motionImage" src={MotionGIFs} alt="" />
      <h1 className="p1Title">MotionGIFs</h1>
      <p className="p1Body">
        CryptoCradle is a cryptocurrency price chart using coin data from an
        external API while allowing a user to search for their favorite
        cryptocurrency.
      </p>
      <div className="p1Buttons">
        <Stack direction="row" spacing={2}>
          <Button
            className="p1Demo"
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
            color="primary"
            variant="contained"
            href="https://github.com/thenathanlyle/MotionGIFs"
            target="_blank"
          >
            GitHub
          </Button>
        </Stack>
      </div>
    </div>
  );
}
