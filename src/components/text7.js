import "./text7.css";
import LINK from "./link";
import BRIJ from "../assets/images/brij.png";

function Textg() {
  return (
    <div className="outer">
      <div className="parta">
        <div className="para-a">BRIJ</div>

        <div className="para-b">
          A QR-code activated <br />
          digital platform.
        </div>

        <div className="para-c">design, branding</div>

        <div className="">
          <LINK />
        </div>
      </div>
      <div className="partb">
        <img className="img" alt="brij-logo" src={BRIJ} />
      </div>
    </div>
  );
}

export default Textg;
