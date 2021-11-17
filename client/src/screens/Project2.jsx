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
      <img className="jayimage" src={JayWalkin} alt="" />
      <h1 className="p2Title">JayWalkin</h1>
      <p className="p2Body">
        CryptoCradle is a cryptocurrency price chart using coin data from an
        external API while allowing a user to search for their favorite
        cryptocurrency.
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
