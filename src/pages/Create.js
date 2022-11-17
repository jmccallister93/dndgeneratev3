import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "../stylesheets/Create.module.scss";

const Create = () => {
  const cardNpc = (
    <Card className={style.createCard}>
      <h3>NPC Generator</h3>
      <p>
        Generate NPC's with the click of a button or customize and hand pick your own!
      </p>
    </Card>
  );

  const cardItem = (
    <Card className={style.createCard}>
    <h3>Item Generator</h3>
    <p>
      Generate Equipment with the click of a button or customize and hand pick your own!
    </p>
  </Card>
  )

  const cardMonster = (
    <Card className={style.createCard}>
    <h3>Monster Generator</h3>
    <p>
      Generate Monsters with the click of a button or customize and hand pick your own!
    </p>
  </Card>
  )

  return (
    <div className={style.createWrapper}>
      <Navbar />
      <h1 className={style.createHeader}>Create</h1>
      <div className={style.createCardWrapper}>
        
        <Link className={style.createLink} to="/npcgen">{cardNpc}</Link>
        <Link className={style.createLink} to="/itemgen">{cardItem}</Link>
        <Link className={style.createLink} to="/monstergen">{cardMonster}</Link>
        
    </div>
    </div>
  );
};

export default Create;
