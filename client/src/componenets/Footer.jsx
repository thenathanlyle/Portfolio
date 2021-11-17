import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme } from "@mui/material/styles";
import "./Footer.css";

export default function Footer() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });

  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/thenathanlyle/"
        download
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon
          className="footer-linkedin"
          theme={theme}
          color="primary"
          fontSize="large"
        />
      </a>
      <a
        href="https://github.com/thenathanlyle"
        download
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon
          className="footer-github"
          theme={theme}
          color="primary"
          fontSize="large"
        />
      </a>
      <a
        href="mailto:nathanlyle1996@gmail.com"
        download
        target="_blank"
        rel="noreferrer"
      >
        <EmailIcon
          className="footer-email"
          theme={theme}
          color="primary"
          fontSize="large"
        />
      </a>
    </footer>
  );
}
