import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import style from "../stylesheets/PageStyle.module.scss";

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

  const cardLocationGen = (
    <Card className={style.createCard}>
      <h3>Location Generator</h3>
      <p>
        Generate Cities, Castles, or Towns with the click of a button or
        customize and hand craft your own!
      </p>
    </Card>
  );

  const cardFactionGen = (
    <Card className={style.createCard}>
      <h3>Faction Generator</h3>
      <p>
        Generate Guilds, Cults, or any Factions with the click of a button or
        customize your own!
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
  const cardPantheonGen = (
    <Card className={style.createCard}>
      <h3>Pantheon Generator</h3>
      <p>
        Generate Pantheons with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );

  sessionStorage.setItem("lastUrl", window.location.href);

  return (
    <div className={style.mainWrapper}>
      {/* <Navbar /> */}
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
        <Link className={style.createLink} to="/locationgen">
          {cardLocationGen}
        </Link>
        <Link className={style.createLink} to="/factiongen">
          {cardFactionGen}
        </Link>
        <Link className={style.createLink} to="/questgen">
          {cardQuestGen}
        </Link>
        <Link className={style.createLink} to="/villaingen">
          {cardVillainGen}
        </Link>
        <Link className={style.createLink} to="/pantheongen">
          {cardPantheonGen}
        </Link>
      </div>
    </div>
  );
};

export default Create;
