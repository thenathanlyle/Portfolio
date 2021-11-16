import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme } from "@mui/material/styles";
import "./Footer.css";

export default function Footer() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#007bff",
      },
    },
  });

  return (
    <footer className="footer">
      <Link
        to={{ pathname: "https://www.linkedin.com/in/thenathanlyle/" }}
        target="_blank"
      >
        <LinkedInIcon
          className="footer-linkedin"
          theme={theme}
          color="primary"
          fontSize="large"
        />
      </Link>{" "}
      <Link
        to={{ pathname: "https://github.com/thenathanlyle" }}
        target="_blank"
      >
        <GitHubIcon
          className="footer-github"
          theme={theme}
          color="primary"
          fontSize="large"
        />
      </Link>
      <Link
        to={{ pathname: "mailto:nathanlyle1996@gmail.com" }}
        target="_blank"
      >
        <EmailIcon
          className="footer-email"
          theme={theme}
          color="primary"
          fontSize="large"
        />
      </Link>
    </footer>
  );
}
