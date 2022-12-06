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
  const cardGodGen = (
    <Card className={style.createCard}>
      <h3>God Generator</h3>
      <p>
        Generate Gods with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardSpellGen = (
    <Card className={style.createCard}>
      <h3>Spell Generator</h3>
      <p>
        Generate Spells with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardDungeonGen = (
    <Card className={style.createCard}>
      <h3>Dungeon Generator</h3>
      <p>
        Generate Dungeons with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardTrapGen = (
    <Card className={style.createCard}>
      <h3>Trap Generator</h3>
      <p>
        Generate Traps with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardPuzzleGen = (
    <Card className={style.createCard}>
      <h3>Puzzle Generator</h3>
      <p>
        Generate Puzzles with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardEncounterGen = (
    <Card className={style.createCard}>
      <h3>Encounter Generator</h3>
      <p>
        Generate Encounters with the click of a button or customize and hand pick
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
        <Link className={style.createLink} to="/godgen">
          {cardGodGen}
        </Link>
        <Link className={style.createLink} to="/spellgen">
          {cardSpellGen}
        </Link>
        <Link className={style.createLink} to="/dungeongen">
          {cardDungeonGen}
        </Link>
        <Link className={style.createLink} to="/trapgen">
          {cardTrapGen}
        </Link>
        <Link className={style.createLink} to="/puzzlegen">
          {cardPuzzleGen}
        </Link>
        <Link className={style.createLink} to="/encountergen">
          {cardEncounterGen}
        </Link>
      </div>
    </div>
  );
};

export default Create;
