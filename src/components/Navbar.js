import style from "../stylesheets/Navbar.module.scss";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { supabase } from "../config/supabaseClient";
import { SessionContext } from "../config/SessionContext";
// import Cookies from "js-cookie";

const Navbar = (props) => {
  const session = useContext(SessionContext);

  //Set location and redirect path variables
  const location = useLocation();
  // const [redirectPath, setRedirectPath] = useState();

  //create navigate function
  const navigate = useNavigate()

  //Set redirect path on page load
  useEffect(() => {
    sessionStorage.setItem('redirectPath', window.location.origin + location.pathname);
  }, [location]);

  //Logs in using Google Auth
  async function handleLogin() {
    const { user, session, error } = await supabase.auth.signInWithOAuth(
      {
        provider: "google",
      },
      // { redirectTo: window.location.origin + location.pathname }
    );
    if (error) {
      console.log(error.message);
    } else {
      console.log(user);
      const redirectPath = sessionStorage.getItem('redirectPath');
      if (redirectPath) {
        navigate(redirectPath);
      }
    }
  }

  // useEffect(() => {
  //   console.log(window.location.origin + location.pathname)
  //     navigate(redirectPath)
  // }, [session])

  //Signs out
  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <div className={style.navbarWrapper}>
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
            <button className={style.navbarLoginBtn} onClick={handleLogin}>
              Login with Google <i className="pi pi-google"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Navbar);
