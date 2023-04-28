import style from "../stylesheets/Home.module.scss";
import BasicCard from "../components/BasicCard";
import { Link } from "react-router-dom";
import sampleCampaign from "../assests/sampleCampaign.jpg";
import sampleNPC from "../assests/sampleNPC.jpg";

const Home = (props) => {
  sessionStorage.setItem("lastUrl", window.location.href);
  const lastUrl = localStorage.getItem("lastUrl");
  if (lastUrl) {
    window.location.href = lastUrl;
  }
  const createDescription =
    "Generate and customize random characters, monsters, items, and more!";

  const campDescription =
    "Manage your campaign and keep track of your campaign components!";

  const collectDescription =
    "View your custom NPCs, monsters, items, and any of your other creations!";

  const createButton = (
    <>
      <Link to="/create">
        <button className={style.homeButton}>Click to Create</button>
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
        <button className={style.homeButton}>View Collections</button>
      </Link>
    </>
  );

  return (
    <>
      <div className={style.homeWrapper}>
        <div className={style.homeTop}>
          <div className={style.homeHeader}>Welcome to DnD Generate</div>
          <div className={style.homeSubHeader}>
            A Dungeons and Dragons 5e Tool
          </div>
        </div>
        <div className={style.homeCardWrapper}>
          <BasicCard
            title={"Generate"}
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
      <div className={style.homeBottom}>
        <div className={style.bottomHeader}>
          Welcome to our Dungeons & Dragons 5th Edition generation tool!
        </div>
        <p className={style.bottomText}>
          Our platform is designed to help game masters and players easily
          create and manage their campaigns by providing built-in generators for
          NPCs, locations, and organizations and more.
        </p>
        <img className={style.sampleCampaign} src={sampleCampaign} alt="" />
        <p className={style.bottomText}>
          Our standalone generators can also create these types of content
          independently, making it easy for you to add depth and detail to your
          campaign as needed. Whether you're a seasoned DM or a new player, our
          platform can help you streamline your campaign management and create
          engaging, dynamic content.
        </p>
        <div className={style.bottomTextImage}>
          <p className={style.bottomText}>
            With our user-friendly interface and robust features, you can spend
            less time on the administrative aspects of your game and more time
            enjoying the adventure. Thank you for choosing our platform for your
            D&D 5e campaign needs. Let's roll some dice and tell some epic
            stories together!
          </p>
          <img className={style.sampleNPC} src={sampleNPC} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
