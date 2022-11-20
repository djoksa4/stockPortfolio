import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./Work.module.scss";

const dummyItems = [
  {
    img: "/img/djordjevodovar/7-cloneflix.PNG",
    title: "Netflix Clone",
    description:
      "A clone of the popular streaming service Netflix created for educational purposes. Includes fully functioning user-creation, authentication, individual user favorites lists, trailers, etc. Uses TMDb API and Firebase acting as a dummy backend.",
    link: "https://cloneflixify.netlify.app/",
  },
  {
    img: "/img/djordjevodovar/8-cryptonixx.PNG",
    title: "CryptoNixx",
    description:
      "A fully functional crypto-currency tracking app providing information on latest (or historical) price changes, market caps, etc. Built using Next.js and TypeScript.",
    link: "https://crypto-nixx.vercel.app/",
  },
  {
    img: "/img/djordjevodovar/9-orgnizzee.PNG",
    title: "Orgnizzee",
    description:
      "A personal organizer app which currently has a fully functioning Expense Tracker module and a Dashboard module. Built using Next.js, React, Typescript, SCSS modules and Apexcharts. If you're interested in testing it please either create a user or use the test one (u: test@test.test | p: test44).",
    link: "https://orgnizzee.vercel.app/",
  },
  {
    img: "/img/djordjevodovar/6-portfolio.PNG",
    title: "Old portfolio page",
    description:
      "My previous portfolio page and also my first React project. A single page site built using React and its various features such as Wrapper components, State, Redux, React Router, conditional JSX and CSS modules.",
    link: "https://djordjevodovar.netlify.app/",
  },
];

const Work = () => {
  const items = dummyItems.map((item) => (
    <div className={classes.work__itemContainer} key={item.img}>
      <img className={classes.work__img} src={item.img} alt={item.title} />

      <div className={classes.work__descriptionContainer}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a href={item.link} target="_blank">
          Project link
        </a>
      </div>
    </div>
  ));

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={classes.work}>
      <Slider {...settings}>{items}</Slider>
    </div>
  );
};

export default Work;
