import LOGO2 from "./image2";
import LINK from "./link";
import "./text6.css";

function Textf() {
  return (
    <div className="all">
      <div className="part1">
        <LOGO2 />
      </div>
      <div className="texts">
        <div className="para1">ECT Vision</div>

        <div className="para2">
          A Platform to keep track of <br />
          your million dollar farm.
        </div>

        <div className="para3">concept, design, development, launch</div>

        <div>
          <div>
            <LINK />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textf;
