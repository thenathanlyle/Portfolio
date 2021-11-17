import "./Home.css";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";

export default function Home() {
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
    <div className="HomePage">
      <h1 className="HomeTitle">Nathan Lyle</h1>
      <p className="HomeBody">
        MotionGIFs is full-stack app built with full CRUD on both posts and
        comments, with user authentication and authorization.
      </p>
      <div className="HomeButtons">
        <Stack direction="row" spacing={2}>
          <Button
            theme={theme}
            color="primary"
            variant="contained"
            href="https://motiongifs.netlify.app/"
            target="_blank"
          >
            Email
          </Button>
          <Button
            theme={theme}
            color="secondary"
            variant="outlined"
            href="https://github.com/thenathanlyle/MotionGIFs"
            target="_blank"
          >
            Resume
          </Button>
        </Stack>
      </div>
    </div>
  );
}
