import React from "react";
import styles from "./mainpage.module.css";
import Rash from "../assets/rash-pic.jpeg";
import { BsBoxArrowInDown } from "react-icons/bs";
import { BsTelephoneForwardFill } from "react-icons/bs";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
} from "react-icons/si";
import { FaReact, FaCss3Alt, FaGitAlt, FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineHtml5,
} from "react-icons/ai";
import Data from "../assets/Data";
import Card from "./Card";
import resume from "../assets/resume.pdf";

const FirstSection = () => {
  return (
    <section className={styles.first_section}>
      <div className={styles.left}>
        <div className={styles.details}>
          <h2 className={styles.blur}>Developer :</h2>
          <h1>Rasheed Adekunle</h1>
          <p className={styles.blur}>
            {" "}
            A frontend developer with experience in building modern,responsive
            web applications using react. I am proficient in using React
            hooks,libraries and functional components to build scalable and
            maintainable user interface. Lets build high-quality, iser-friendly
            products together
          </p>

          <a
            href={resume}
            className={styles.resume}
            download="BigRasDev's resume.pdf"
            target="_blank"
          >
            <p>Click to download my resume</p>
            {<BsBoxArrowInDown />}
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <div>
          <img
            src={Rash}
            alt="BigRashDev's profile picture"
            className={styles.main_image}
          />
        </div>
      </div>
    </section>
  );
};

const SecondSection = () => {
  return (
    <section className={styles.second_section}>
      <div className={styles.wrapper}>
        <div>
          <span className={styles.react}>
            <FaReact />
          </span>
          <h1>React</h1>
        </div>
        <div>
          <span className={styles.html}>
            <AiOutlineHtml5 />
          </span>
          <h1>HTML</h1>
        </div>
        <div>
          <span className={styles.css}>
            <FaCss3Alt />
          </span>
          <h1>CSS</h1>
        </div>
        <div>
          <span className={styles.js}>
            <SiJavascript />
          </span>
          <h1>Javascript</h1>
        </div>
        <div>
          <span className={styles.tailwind}>
            <SiTailwindcss />
          </span>
          <h1>Tailwind</h1>
        </div>
        <div>
          <span className={styles.redux}>
            <SiRedux />
          </span>
          <h1>Redux</h1>
        </div>
        <div>
          <span className={styles.bootstrap}>
            <SiBootstrap />
          </span>
          <h1>Bootstrap</h1>
        </div>
        <div>
          <span className={styles.git}>
            <FaGitAlt />
          </span>
          <h1>Git</h1>
        </div>
      </div>
    </section>
  );
};
const ThirdSection = () => {
  return (
    <section className={styles.third_section}>
      <h1>My projects</h1>
      <div>
        {Data.map((proj) => (
          <Card
            img={proj.img}
            title={proj.title}
            tools={proj.tools}
            key={proj.img}
          />
        ))}
      </div>
    </section>
  );
};

const ContactMe = () => {
  return (
    <section>
      <div>
        <h1>Get in touch</h1>
        <p>Just a direct message away</p>
      </div>

      <div>
        <a href="" target="_blank">
          {<FaWhatsapp />}
        </a>
        <a href="" target="_blank">
          {<BsTelephoneForwardFill />}
        </a>
      </div>
    </section>
  );
};
function MainPage(props) {
  props.scroll(ThirdSection);
  return (
    <main>
      {/* First section */}
      <FirstSection />
      {/* Second section */}
      <SecondSection />
      {/* Third section */}
      <ThirdSection />
      {/* Contact me */}
      <ContactMe />
    </main>
  );
}

export default MainPage;
