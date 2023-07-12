import React from "react";
import classes from "./header.module.css";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { IconContext } from "react-icons";
function Header(props) {
  return (
    <header>
      <div className={classes.logo}>
        <img src="https://img.icons8.com/cotton/64/null/slightly-smiling-face-icon.png" />{" "}
        <h4>BigRashDev</h4>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a onClick={props.scroll}>Projects</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </nav>
      <div className={classes.contacts}>
        <a href="mailto:adekunlerasheed333@gmail.com">
          <AiOutlineMail />
        </a>
        <a href="https://www.linkedin.com/in/rasheed-adekunle" target="_blank">
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/Rashford07" target="_blank">
          <AiOutlineGithub />
        </a>
      </div>
    </header>
  );
}

export default Header;
