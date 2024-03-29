import style from "../stylesheets/Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { supabase } from "../config/supabaseClient";
import { SessionContext } from "../config/SessionContext";
import d20Text from "../assests/DnDGenLogo.png";
import d20 from "../assests/LogoDice.png";

const Navbar = (props) => {
  const session = useContext(SessionContext);
  const location = useLocation();

  const [logo, setLogo] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  //Meida Query
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1285);

  //Sets mobile
  useEffect(() => {
    // Update isMobile whenever the window size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1285);
    };
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Set logo depending on ismobile
  useEffect(() => {
    if (isMobile) {
      setLogo(d20);
    } else {
      setLogo(d20Text);
    }

    // Close the menu if the click occurred outside of the menu
    const handleDocumentClick = (event) => {
      if (
        isOpen &&
        !event.target.closest(`.${style.navbarDropdown}`) &&
        !event.target.closest(`.${style.navbarHamburger}`)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [isMobile, isOpen]);

  //Set location and redirect path variables
  const [, setRedirectPath] = useState(localStorage.getItem("redirectPath"));

  //Set redirect path on page change
  useEffect(() => {
    localStorage.setItem(
      "redirectPath",
      window.location.origin + location.pathname
    );
    const newRedirectPath = localStorage.getItem("redirectPath");
    setRedirectPath(newRedirectPath);
    props.updateRedirectPath(newRedirectPath);
    // eslint-disable-next-line
  }, [location]);

  //Signs out
  async function handleLogout() {
    await supabase.auth.signOut();
  }

  //Hamburger button
  const hamburger = (
    <button
      className={style.navbarHamburger}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );

  return (
    <div className={style.navbarWrapper}>
      <div className={style.navbarLogoWrapper}>
        <Link to="/">
          <img
            className={style.navbarLogo}
            src={logo}
            alt="logo"
            style={{
              height: isMobile ? "5rem" : "auto",
              width: isMobile ? "6rem" : "auto",
            }}
          />
        </Link>
      </div>

      <ul className={style.navbarUl}>
        <Link to="/">
          <li className={style.navbarLi}>Home</li>
        </Link>
        <Link to="/notes" session={session}>
          <li className={style.navbarLi}>Campaign</li>
        </Link>
        <Link to="/create" session={session}>
          <li className={style.navbarLi}>Create</li>
        </Link>
        <Link to="/collectionpage" session={session}>
          <li className={style.navbarLi}>Collections</li>
        </Link>
      </ul>

      {/* Mobile rendering */}
      {isMobile && (
        <div style={{ position: "relative" }}>
          {hamburger}
          <div
            className={style.navbarDropdown}
            style={{ display: isOpen ? "block" : "none" }}
          >
            <Link to="/">
              <div className={style.navbarDropdownLink}>Home</div>
            </Link>
            <Link to="/notes" session={session}>
              <div className={style.navbarDropdownLink}>Campaign</div>
            </Link>
            <Link to="/create" session={session}>
              <div className={style.navbarDropdownLink}>Create</div>
            </Link>
            <Link to="/collectionpage" session={session}>
              <div className={style.navbarDropdownLink}>Collections</div>
            </Link>
            {session ? (
              <div className={style.navbarLoginWrapper}>
                {isMobile ? null : (
                  <div className={style.navbarEmail}>{session.user.email}</div>
                )}

                <div className={style.navbarBtnWrapper}>
                  <button
                    className={style.navbarLoginBtn}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className={style.navbarLoginWrapper}>
                <div className={style.navbarBtnWrapper}>
                  <Link to="/login" session={session}>
                    <button className={style.navbarLoginBtn}>Login</button>
                  </Link>
                  <p>or</p>
                  <Link to="/signup" session={session}>
                    <button className={style.navbarLoginBtn}>Signup</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop rendering */}
      {!isMobile ? (
        <>
          {session ? (
            <div className={style.navbarLoginWrapper}>
              <div className={style.navbarEmail}>{session.user.email}</div>
              <div className={style.navbarBtnWrapper}>
                <button className={style.navbarLoginBtn} onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className={style.navbarLoginWrapper}>
              <div className={style.navbarBtnWrapper}>
                <Link to="/login" session={session}>
                  <button className={style.navbarLoginBtn}>Login</button>
                </Link>
                <p>or</p>
                <Link to="/signup" session={session}>
                  <button className={style.navbarLoginBtn}>Signup</button>
                </Link>
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default React.memo(Navbar);
