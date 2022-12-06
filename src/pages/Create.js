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
        Generate Taverns, Shops, etc. with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardCityGen = (
    <Card className={style.createCard}>
      <h3>City Generator</h3>
      <p>
        Generate fully stocked Cities with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardGuildGen = (
    <Card className={style.createCard}>
      <h3>Guild Generator</h3>
      <p>
        Generate Guilds with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardFactionGen = (
    <Card className={style.createCard}>
      <h3>Faction Generator</h3>
      <p>
        Generate Factions with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardCultGen = (
    <Card className={style.createCard}>
      <h3>Cult Generator</h3>
      <p>
        Generate Cults with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardWorldGen = (
    <Card className={style.createCard}>
      <h3>World Generator</h3>
      <p>
        Generate Worlds with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardQuestGen = (
    <Card className={style.createCard}>
      <h3>Quest Generator</h3>
      <p>
        Generate Quests with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardVillainGen = (
    <Card className={style.createCard}>
      <h3>Villain Generator</h3>
      <p>
        Generate Villains with the click of a button or customize and hand pick
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
        <Link className={style.createLink} to="/citygen">
          {cardCityGen}
        </Link>
        <Link className={style.createLink} to="/guildgen">
          {cardGuildGen}
        </Link>
        <Link className={style.createLink} to="/factiongen">
          {cardFactionGen}
        </Link>
        <Link className={style.createLink} to="/cultgen">
          {cardCultGen}
        </Link>
        <Link className={style.createLink} to="/worldgen">
          {cardWorldGen}
        </Link>
        <Link className={style.createLink} to="/questgen">
          {cardQuestGen}
        </Link>
        <Link className={style.createLink} to="/villaingen">
          {cardVillainGen}
        </Link>
      </div>
    </div>
  );
};

export default Create;
