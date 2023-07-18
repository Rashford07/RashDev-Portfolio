import React from "react";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import classes from "./footer.module.css";

const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <div className={classes.footer_wrapper}>
        <div className={classes.logo}>
          <img src="https://img.icons8.com/cotton/64/null/slightly-smiling-face-icon.png" />{" "}
          <h4>BigRashDev</h4>
        </div>
        <div>
          <p>&copy; {currentYear} BigRashDev. All Rights Reserved.</p>
        </div>
        <div className={classes.social_icons}>
          <a href="mailto:adekunlerasheed333@gmail.com">
            <AiOutlineMail />
          </a>
          <a
            href="https://www.linkedin.com/in/rasheed-adekunle"
            target="_blank"
          >
            <AiOutlineLinkedin />
          </a>
          <a href="https://github.com/Rashford07" target="_blank">
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
