import JayWalkin from "../assets/JayWalkin.png";
import "./Project2.css";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
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
      <Stack direction="row" spacing={1} className="p2ListA">
        <Chip label="Made with:" />
        <Chip label="React JS" variant="outlined" />
        <Chip label="MongoDB" variant="outlined" />
        <Chip label="Express" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={1} className="p2ListB">
        <Chip label="Node.js" variant="outlined" />
        <Chip label="Bcrypt" variant="outlined" />
        <Chip label="JWT" variant="outlined" />
        <Chip label="MUI" variant="outlined" />
        <Chip label="Heroku" variant="outlined" />
      </Stack>
      <p className="p2Body">
        JayWalkin is an E-commerce site. The site was built in a team
        environment and features full CRUD on products. JayWalkin offers the
        functionalities of filtering, searching, and sorting different products.
      </p>
      <Stack direction="row" spacing={2} className="p2Buttons">
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
  );
}
