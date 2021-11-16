import MotionGIFs from "../assets/MotionGIFs.png";
import "./Project1.css";

export default function Project1() {
  return (
    <div className="project1">
      <img className="motionimage" src={MotionGIFs} alt="" />
      <h3>MotionGIFs</h3>
      <p>
        CryptoCradle is a cryptocurrency price chart using coin data from an
        external API while allowing a user to search for their favorite
        cryptocurrency.
      </p>
    </div>
  );
}
