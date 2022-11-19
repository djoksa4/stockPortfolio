import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./Work.module.scss";

const dummyItems = [
  {
    img: "/img/walllight.jpg",
    title: "First project",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    link: "https://google.com/search?q=djordje+vodovar",
  },
  {
    img: "/img/oldcamera.jpg",
    title: "Second project",
    description:
      "Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
    link: "https://google.com/search?q=vodovar+djordje",
  },
  {
    img: "/img/camerafocus.jpg",
    title: "Third project",
    description:
      "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.",
    link: "https://google.com",
  },
  {
    img: "/img/mixer.jpg",
    title: "Fourth project",
    description:
      "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
    link: "https://google.com/search?q=djordjevodovar",
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
