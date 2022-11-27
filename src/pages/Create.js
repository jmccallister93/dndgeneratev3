import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "../stylesheets/Create.module.scss";

const Create = () => {
  const cardNpcGen = (
    <Card className={style.createCard}>
      <h3>NPC Generator</h3>
      <p>
        Generate NPC's with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );

  const cardItemGen = (
    <Card className={style.createCard}>
      <h3>Item Generator</h3>
      <p>
        Generate Equipment with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );

  const cardMonsterGen = (
    <Card className={style.createCard}>
      <h3>Monster Generator</h3>
      <p>
        Generate Monsters with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardBuildingGen = (
    <Card className={style.createCard}>
      <h3>Building Generator</h3>
      <p>
        Generate Taverns, Inns, Shops, etc. with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );

  return (
    <div className={style.createWrapper}>
      <Navbar />
      <h1 className={style.createHeader}>Create</h1>
      <div className={style.createCardWrapper}>
        <Link className={style.createLink} to="/npcgen">
          {cardNpcGen}
        </Link>
        <Link className={style.createLink} to="/itemgen">
          {cardItemGen}
        </Link>
        <Link className={style.createLink} to="/monstergen">
          {cardMonsterGen}
        </Link>
        <Link className={style.createLink} to="/buildinggen">
          {cardBuildingGen}
        </Link>
      </div>
    </div>
  );
};

export default Create;
