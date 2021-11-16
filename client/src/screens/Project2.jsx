import JayWalkin from "../assets/JayWalkin.png";
import "./Project2.css";

export default function Project2() {
  return (
    <div className="project2">
      <img className="jayimage" src={JayWalkin} alt="" />
      <h1>JayWalkin</h1>
      <p>
        CryptoCradle is a cryptocurrency price chart using coin data from an
        external API while allowing a user to search for their favorite
        cryptocurrency.
      </p>
    </div>
  );
}
