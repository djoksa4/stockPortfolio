import { useState } from "react";

import classes from "./App.module.scss";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Socials from "./Components/Socials/Socials";

const App = () => {
  ////// INPUTS ///////
  const logo = {
    text: "Cédric Godwind",
    action() {
      setPage("home");
    },
  };
  const description = "Videographer & Sound Designer";

  const links = [
    {
      text: "Home",
      action() {
        setPage(this.text.toLowerCase());
      },
    },
    {
      text: "Work",
      action() {
        setPage(this.text.toLowerCase());
      },
    },
    {
      text: "About",
      action() {
        setPage(this.text.toLowerCase());
      },
    },
    {
      text: "Contact",
      action() {
        setPage(this.text.toLowerCase());
      },
    },
  ];

  const socials = [
    {
      name: "linkedin",
      link: "https://linkedin.com",
    },
    {
      name: "youtube",
      link: "https://youtube.com",
    },
    {
      name: "instagram",
      link: "https://instagram.com",
    },
    {
      name: "twitter",
      link: "https://twitter.com",
    },
    {
      name: "facebook",
      link: "https://facebook.com",
    },
    {
      name: "tiktok",
      link: "https://tiktok.com",
    },
  ];
  ////////////////////

  const [page, setPage] = useState("home");

  return (
    <div className={classes.app}>
      <Nav logo={logo} links={links} page={page} />
      <Hero
        header={logo.text}
        description={description}
        links={links}
        page={page}
      />
      <Socials socials={socials} />
    </div>
  );
};

export default App;
