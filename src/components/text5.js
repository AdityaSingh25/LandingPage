import Applogo from "./appstore";
import Playlogo from "./playstore";
import "./text5.css";

function Texte() {
  return (
    <div className="main">
      <div className="para1">Garden Vision</div>

      <div className="para2">
        Mobile App to track plants <br />
        health and production.
      </div>

      <div className="para3">logo, design, development, launch</div>

      <div className="together">
        <div className="play">
          <Playlogo />
        </div>

        <div className="app">
          <Applogo />
        </div>
      </div>
    </div>
  );
}

export default Texte;
