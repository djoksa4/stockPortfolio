import React from "react";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";

import classes from "./Hero.module.scss";
import LogoSVG from "../../SVGs/LogoSVG";
import About from "../Sections/About";
import Contact from "../Sections/Contact";
import Work from "../Sections/Work";

const Hero = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  // HOME page buttons
  const buttons = props.links.map((link, index) => {
    if (link.text !== "Home") {
      return (
        <button
          className={classes.hero__button}
          onClick={link.action.bind(link)}
          key={index}
        >
          {link.text}
        </button>
      );
    }
  });

  // ALL pages description
  const description =
    props.page === "home" ? props.description : props.page.toUpperCase();

  return (
    <div className={classes.hero}>
      {isMobile && props.page !== "home" ? null : (
        <div className={classes.hero__svgContainer}>
          <LogoSVG className={classes.hero__logoSVG} />
        </div>
      )}
      <div className={classes.hero__header}>{props.header}</div>

      <div className={classes.hero__description}>{description}</div>

      {/* HOME */}
      {props.page === "home" && (
        <Fade>
          <div className={classes.hero__buttonsContainer}>{buttons}</div>
        </Fade>
      )}

      {/* OTHER SECTIONS */}
      {props.page !== "home" && (
        <div className={classes.hero__sectionContainer}>
          {props.page === "about" && (
            <Fade>
              <About />
            </Fade>
          )}

          {props.page === "work" && (
            <Fade>
              <Work />
            </Fade>
          )}

          {props.page === "contact" && (
            <Fade>
              <Contact />
            </Fade>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
