import Navbar from "../components/Navbar";
import style from "../stylesheets/Home.module.scss";
import BasicCard from "../components/BasicCard";
import NotePage from "../notes/pages/NotePage";
import ns from "../stylesheets/Note.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const createDescription =
    "Generate and customize random characters, monsters, items, and more!";

  const campDescription =
    "Manage your campaign and keep track of your campaign components!";

  const collectDescription =
    "View your custom characters, monsters, items, and more!";

  const createButton = (
    <>
      <Link to="/create">
        <button className={style.homeButton}>Go to Create</button>
      </Link>
    </>
  );

  const campButton = (
    <>
      <Link to="/notes">
        <button className={style.homeButton}>Go to Campaign</button>
      </Link>
    </>
  );

  const collectButton = (
    <>
      <Link to="/collectionpage">
        <button className={style.homeButton}>Go to Collections</button>
      </Link>
    </>
  );

  return (
    <div className={style.homeWrapper}>
      <Navbar />
      <div className={style.homeHeader}>Welcome to DnD Generate</div>
      <div className={style.homeCardWrapper}>
        <BasicCard
          title={"Create"}
          description={createDescription}
          button={createButton}
        />
        <BasicCard
          title={"Campaign Management"}
          description={campDescription}
          button={campButton}
        />
        <BasicCard
          title={"Collections"}
          description={collectDescription}
          button={collectButton}
        />
      </div>
    </div>
  );
};

export default Home;
