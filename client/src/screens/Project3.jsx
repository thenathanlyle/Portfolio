import CryptoCradle from "../assets/CryptoCradle.png";
import "./Project3.css";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";

export default function Project3() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3687D1",
      },
      secondary: {
        main: "#000000",
      },
    },
  });
  return (
    <div className="project3">
      <img className="p3Image" src={CryptoCradle} alt="" />
      <h1 className="p3Title">
        crypto<span>cradle</span>
      </h1>
      <p className="p3Body">
        CryptoCradle is a cryptocurrency price chart using coin data from an
        external 3rd party API while allowing a user to search for their
        favorite cryptocurrency.
      </p>
      <div className="p3Buttons">
        <Stack direction="row" spacing={2}>
          <Button
            theme={theme}
            color="primary"
            variant="contained"
            href="https://thenathanlyle.github.io/CryptoCradle/"
            target="_blank"
          >
            Visit Demo
          </Button>
          <Button
            theme={theme}
            color="secondary"
            variant="outlined"
            href="https://github.com/thenathanlyle/CryptoCradle"
            target="_blank"
          >
            GitHub
          </Button>
        </Stack>
      </div>
    </div>
  );
}
