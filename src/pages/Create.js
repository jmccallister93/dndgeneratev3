import { Card } from "primereact/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";

const Create = () => {
  const [isIndividualActive, setIsIndividualActive] = useState(false);
  const [isModuleActive, setIsModuleActive] = useState(false);

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
        Generate Taverns, Shops, etc. with the click of a button or customize
        and hand pick your own!
      </p>
    </Card>
  );
  const cardCityGen = (
    <Card className={style.createCard}>
      <h3>City Generator</h3>
      <p>
        Generate fully stocked Cities with the click of a button or customize
        and hand pick your own!
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
  const cardPantheonGen = (
    <Card className={style.createCard}>
      <h3>Pantheon Generator</h3>
      <p>
        Generate Pantheons with the click of a button or customize and hand pick
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
        Generate Encounters with the click of a button or customize and hand
        pick your own!
      </p>
    </Card>
  );
  const cardClassGen = (
    <Card className={style.createCard}>
      <h3>Class Generator</h3>
      <p>
        Generate Classes with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardRaceGen = (
    <Card className={style.createCard}>
      <h3>Race Generator</h3>
      <p>
        Generate Races with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const cardModuleGen = (
    <Card className={style.createCard}>
      <h3>Module Generator</h3>
      <p>
        Generate Modules with the click of a button or customize and hand pick
        your own!
      </p>
    </Card>
  );
  const showIndividual = () => {
    setIsIndividualActive((current) => !current);
  };
  const showModule = () => {
    setIsModuleActive((current) => !current);
  };
  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <h1 className={style.createHeader}>Create</h1>
      <div className={style.createWrapper}>
        <h1 className={style.subHeader2} onClick={showIndividual}>
          Individual Items{" "}
          {isIndividualActive ? (
            <i className="pi pi-chevron-down"></i>
          ) : (
            <i className="pi pi-chevron-right"></i>
          )}
          <div
          className={
            isIndividualActive ? style.createCardWrapper : style.hidden
          }
        >
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
          <Link className={style.createLink} to="/pantheongen">
            {cardPantheonGen}
          </Link>
          {/* <Link className={style.createLink} to="/spellgen">
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
          <Link className={style.createLink} to="/classgen">
            {cardClassGen}
          </Link>
          <Link className={style.createLink} to="/racegen">
            {cardRaceGen}
          </Link> */}
        </div>
        </h1>
        <h1 className={style.subHeader2} onClick={showModule}>
          Module{" "}
          {isModuleActive ? (
            <i className="pi pi-chevron-down"></i>
          ) : (
            <i className="pi pi-chevron-right"></i>
          )}
        </h1>
        <div
          className={
            isModuleActive ? style.createCardWrapper : style.hidden
          }
        >
          <Link className={style.createLink} to="/modulegen">
            {cardModuleGen}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Create;
