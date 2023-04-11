import style from "../stylesheets/Navbar.module.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { supabase } from "../config/supabaseClient";

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useState(null);

  // ISSUE IS BELOW

  //Checks if user is logged in
  // useEffect(() => {
  //   const currentUser = supabase.auth.user();
  //   setLoggedUser(currentUser);
  // }, []);

  //Logs in using Google Auth
  async function handleLogin() {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log(user);
    }
  }

  //Signs out
  async function handleLogout() {
    await supabase.auth.signOut();
    setLoggedUser(null);
  }

  return (
    <div className={style.navbarWrapper}>
      <ul className={style.navbarUl}>
        <Link to="/">
          <li className={style.navbarLi}>Home</li>
        </Link>
        <Link to="/notes">
          <li className={style.navbarLi}>Campaign</li>
        </Link>
        <Link to="/create">
          <li className={style.navbarLi}>Create</li>
        </Link>
        <Link to="/collectionpage">
          <li className={style.navbarLi}>Collections</li>
        </Link>
        {/* <Link to="/about">
          <li className={style.navbarLi}>About</li>
        </Link> */}
      </ul>

      {/* <div className={style.navbarLoginWrapper}>
        <div className={style.navbarBtnWrapper}>
          <button className={style.navbarLoginBtn} onClick={handleSubmit}>
            Login with Google
          </button>
        </div>
      </div> */}
      {loggedUser ? (
        <div className={style.navbarLoginWrapper}>
          <div className={style.navbarBtnWrapper}>
            <button className={style.navbarLoginBtn} onClick={handleLogout}>
              Logout
            </button>
            <div className={style.navbarEmail}>{loggedUser.email}</div>
          </div>
        </div>
      ) : (
        <div className={style.navbarLoginWrapper}>
          <div className={style.navbarBtnWrapper}>
            <button className={style.navbarLoginBtn} onClick={handleLogin}>
              Login with Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Navbar);
