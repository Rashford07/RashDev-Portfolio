import React, { useState } from "react";
import classes from "./header.module.css";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import ScrollIntoView from "react-scroll-into-view";

function Header(props) {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  props.onToggle(toggle);

  const scrollLinkHandler = () => {
    setToggle(false);
  };

  return (
    <header className={toggle ? classes.active : ""} id="home-header">
      <div className={classes.logo}>
        <img src="https://img.icons8.com/cotton/64/null/slightly-smiling-face-icon.png" />{" "}
        <h4>BigRashDev</h4>
      </div>
      <nav className={toggle ? classes.active : ""}>
        <ul>
          <li>
            <ScrollIntoView selector="#home-header" onClick={scrollLinkHandler}>
              <a>Home</a>
            </ScrollIntoView>
          </li>
          <li>
            <ScrollIntoView selector="#projects" onClick={scrollLinkHandler}>
              <a>Projects</a>
            </ScrollIntoView>
          </li>
          <li>
            <ScrollIntoView selector="#contact-me" onClick={scrollLinkHandler}>
              <a>Contact Me</a>
            </ScrollIntoView>
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
      <div
        className={
          !toggle
            ? classes.toggle_btn
            : classes.toggle_btn + " " + classes.active
        }
        onClick={toggleHandler}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
