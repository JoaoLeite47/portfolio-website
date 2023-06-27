import { IoIosArrowDown } from "react-icons/io";
import "./Intro.css";
import Typewriter from "typewriter-effect"; // lib for type writer effect

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/foto1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello There, I'm</h2>
          <h1>
            João <span className="name">Leite</span>
          </h1>
          <h3>
            <Typewriter
              className="profision"
              options={{
                strings: ["Full_Stack_Developer", "Graphic_Designer", "Love_a_Good_Challenge!"],
                autoStart: true,
                delay: 60,
                loop: true,
                cursor: "|",
              }}
            />
          </h3>
        </div>
        <a href="#portfolio">
          <IoIosArrowDown className="img-down" size="4em" />
        </a>
      </div>
    </div>
  );
}
