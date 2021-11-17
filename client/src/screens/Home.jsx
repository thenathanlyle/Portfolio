import Nathan from "../assets/nathan.JPG";
import "./Home.css";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";

export default function Home() {
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
    <div className="HomePage">
      <h1 className="HomeTitle">Nathan Lyle</h1>
      <div className="circular--portrait">
        <img className="HomeImage" src={Nathan} alt="" />
      </div>
      <p className="HomeBody">Full-Stack | Software Developer | Marketing</p>
      <div className="HomeButtons">
        <Stack direction="row" spacing={2}>
          <Button
            theme={theme}
            color="primary"
            variant="contained"
            href="mailto:nathanlyle1996@gmail.com"
            target="_blank"
          >
            Email
          </Button>
          <Button
            theme={theme}
            color="secondary"
            variant="outlined"
            href="https://drive.google.com/file/d/1Bctk3Yb76otSqD_XbIZECYwkHEyi1zMc/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Button>
        </Stack>
      </div>
    </div>
  );
}
