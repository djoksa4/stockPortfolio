import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import classes from "./Socials.module.scss";
import FacebookSVG from "../../SVGs/FacebookSVG";
import TikTokSVG from "../../SVGs/TikTokSVG";
import LinkedinSVG from "../../SVGs/LinkedinSVG";
import YoutubeSVG from "../../SVGs/YoutubeSVG";
import InstagramSVG from "../../SVGs/InstagramSVG";
import TwitterSVG from "../../SVGs/TwitterSVG";
import GitHubSVG from "../../SVGs/GitHubSVG";

// Possible socials
const socialsSVGs = {
  linkedin: <LinkedinSVG className={classes.socials__svg} />,
  youtube: <YoutubeSVG className={classes.socials__svg} />,
  instagram: <InstagramSVG className={classes.socials__svg} />,
  twitter: <TwitterSVG className={classes.socials__svg} />,
  facebook: <FacebookSVG className={classes.socials__svg} />,
  tiktok: <TikTokSVG className={classes.socials__svg} />,
  github: <GitHubSVG className={classes.socials__svg} />,
};

const Socials = (props) => {
  const [socialsMenu, setSocialsMenu] = useState(false);

  // Click away the dropdown logic
  useEffect(() => {
    const closeMenu = (e) => {
      const element = e.target;

      if (
        element.tagName !== "path" &&
        element.tagName !== "svg" &&
        element.id !== "socialsButton"
      ) {
        setSocialsMenu(false);
      }
    };

    document.body.addEventListener("click", closeMenu);

    return () => document.body.removeEventListener("click", closeMenu);
  }, []);

  // Socials based on input
  const socials = props.socials.map((social) => (
    <a href={social.link} target="_blank">
      {socialsSVGs[social.name]}
    </a>
  ));

  return (
    <div className={classes.socials}>
      {!socialsMenu && (
        <div
          onClick={() => setSocialsMenu(true)}
          className={classes.socials__button}
          id="socialsButton"
        >
          Social Media
        </div>
      )}

      {socialsMenu && (
        <Fade>
          <div className={classes.socials__links}>{socials}</div>
        </Fade>
      )}
    </div>
  );
};

export default Socials;
