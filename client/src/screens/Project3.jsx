import CryptoCradle from "../assets/CryptoCradle.png";
import "./Project3.css";

export default function Project3() {
  return (
    <div className="project3">
      <img className="test" src={CryptoCradle} alt="" />
      <h3>CryptoCradle</h3>
      <p>
        CryptoCradle is a cryptocurrency price chart using coin data from an
        external API while allowing a user to search for their favorite
        cryptocurrency.
      </p>
    </div>
  );
}
