import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ReactDOM from "react-dom";

import classes from "./Nav.module.scss";
import MenuSVG from "../../SVGs/MenuSVG";

const Nav = (props) => {
  // States
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const [solidNav, setSolidNav] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  // Make Nav bar solid on scrolldown
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 65) {
        setSolidNav(true);
      } else {
        setSolidNav(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setSolidNav(true);
        } else {
          setSolidNav(false);
        }
      });
    };
  }, []);

  // Links
  const links = props.links.map((link, index) => (
    <button
      className={`${classes.nav__linkButton} ${
        isMobile && classes.nav__linkButtonMobile
      } ${link.text.toLowerCase() === props.page && classes.nav__linkActive}`}
      onClick={() => {
        setMenuVisible(false);
        link.action();
      }}
      key={index}
    >
      {link.text}
    </button>
  ));

  // JSX
  return (
    <div className={`${classes.nav} ${solidNav && classes.nav__solid}`}>
      {/* LOGO */}
      <div onClick={props.logo.action} className={classes.nav__logo}>
        {props.logo.text}
      </div>

      {/* LINKS */}
      {/* Desktop */}
      {!isMobile && <div className={classes.nav__linksContainer}>{links}</div>}

      {/* Mobile */}
      {isMobile && (
        <>
          <div
            onClick={() => {
              setMenuVisible(true);
            }}
            className={classes.nav__svgContainer}
          >
            <MenuSVG className={classes.nav__menuSVG} />
          </div>

          {/* Menu */}
          {menuVisible &&
            ReactDOM.createPortal(
              <div className={classes.nav__linksContainerMobile}>
                <>
                  <div
                    className={
                      classes.nav__linksContainerMobile__CloseButtonContainer
                    }
                  >
                    <button
                      onClick={() => {
                        setMenuVisible(false);
                      }}
                      className={classes.nav__linksContainerMobile__CloseButton}
                    >
                      X
                    </button>
                  </div>

                  {links}
                </>
              </div>,
              document.getElementById("overlays")
            )}
        </>
      )}
    </div>
  );
};

export default Nav;
