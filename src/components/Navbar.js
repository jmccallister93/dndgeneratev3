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
        <Link to="/about">
          <li className={style.navbarLi}>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
