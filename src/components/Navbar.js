import style from "../stylesheets/Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.navbarWrapper}>
      <ul className={style.navbarUl}>
        <Link to="/">
          <li className={style.navbarLi}>Home</li>
        </Link>
        <Link to="/create">
          <li className={style.navbarLi}>Create</li>
        </Link>
        <Link to="/notes">
          <li className={style.navbarLi}>Campaign</li>
        </Link>
        <Link to="/collections">
          <li className={style.navbarLi}>Collections</li>
        </Link>
        <Link to="/about">
          <li className={style.navbarLi}>About</li>
        </Link>
        
      </ul>

      <div className={style.navbarLoginWrapper}>
        <div className={style.navbarBtnWrapper}>
          <Link to="/login">
            <button className={style.navbarLoginBtn}>Login</button>
          </Link>
          <p>OR</p>
          <Link to="/signup">
            <button className={style.navbarSignupBtn}>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
