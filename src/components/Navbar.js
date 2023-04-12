import style from "../stylesheets/Navbar.module.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { supabase } from "../config/supabaseClient";
import { SessionContext } from "../config/SessionContext";


const Navbar = (props) => {
  const session = useContext(SessionContext);

  //Logs in using Google Auth
  async function handleLogin() {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log(error.message);
    } else {
      console.log(user);
      const authWindow = window.open('', 'auth', 'height=800,width=600');
    authWindow.location.href = session.provider_token.url;
    }
  }

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
