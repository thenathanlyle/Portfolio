import CryptoCradle from "../assets/CryptoCradle.png";
import "./Project3.css";

export default function Project3() {
  return (
    <div className="project3">
      <img className="cryptoimage" src={CryptoCradle} alt="" />
      <h1>CryptoCradle</h1>
      <p>
        CryptoCradle is a cryptocurrency price chart using coin data from an
        external API while allowing a user to search for their favorite
        cryptocurrency.
      </p>
    </div>
  );
}
