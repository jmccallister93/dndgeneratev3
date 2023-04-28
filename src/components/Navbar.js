import style from "../stylesheets/Navbar.module.scss";
import { Link,  useLocation,  } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { supabase } from "../config/supabaseClient";
import { SessionContext } from "../config/SessionContext";
import d20 from "../assests/DnDGenLogo.png";

const Navbar = (props) => {
  const session = useContext(SessionContext);
  const location = useLocation();
  // const history = useNavigate();

  //Set location and redirect path variables
  const [, setRedirectPath] = useState(
    localStorage.getItem("redirectPath")
  );

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

  //Logs in using Google Auth
  // async function handleLogin() {
  //   const { user, session, error } = await supabase.auth.signInWithOAuth(
  //     {
  //       provider: "google",
  //     },
  //     { redirectTo: window.location.origin + location.pathname }
  //   )
  //   if (error) {
  //     console.log(error.message);
  //   } else {
  //     console.log("Logged in successfully");
  //   }
  // }

  //Logs in using email
  // async function signInWithEmail() {
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: "example@email.com",
  //     password: "example-password",
  //   });
  // }

  // //Signs up using email
  // async function singUpWithEmail() {
  //   const { user, session, error } = await supabase.auth.signUp({
  //     email: "example@email.com",
  //     password: "example-password",
  //   });
  // }

  // const handleLogin = () => {};

  //Signs out
  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <div className={style.navbarWrapper}>
      <div className={style.navbarLogoWrapper}>
        <Link to="/">
          <img
            className={style.navbarLogo}
            src={d20}
            alt="logo"
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
    </div>
  );
};

export default React.memo(Navbar);
