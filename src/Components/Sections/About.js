import classes from "./About.module.scss";

const About = () => {
  return (
    <div className={classes.about}>
      <p>
        {" "}
        I am an aspiring{" "}
        <span className={classes.about__highlight}>
          Frontend Developer
        </span>{" "}
        interested in building websites and web apps that lead to success of
        larger products.
      </p>
      <p>
        I also like sharing the content I create and the knowledge I pick up in
        the process in regards to Web Development beneficial to other people in
        the community. <br />
        You can checkout my{" "}
        <span className={classes.about__highlight}>live projects</span> in the{" "}
        <span className={classes.about__highlight}>Work</span> section and the
        code itself on my{" "}
        <span className={classes.about__highlight}>GitHub</span>.
      </p>
      <p>
        Currently I'm working full-time as an App Support Engineer focusing
        mostly on the backend (Linux, SQL) but I am open to Frontend job
        opportunities where I can contribute, learn and grow. <br />
        Please don't hesitate to reach out to me either using the{" "}
        <span className={classes.about__highlight}>Contact</span> section or via{" "}
        <span className={classes.about__highlight}>LinkedIn</span> regarding any
        offers and/or questions.
      </p>
    </div>
  );
};

export default About;
