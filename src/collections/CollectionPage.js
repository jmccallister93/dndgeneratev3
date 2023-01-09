import { Card } from "primereact/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "../stylesheets/Collection.module.scss";
import CollectionTable from "./CollectionTable";

const CollectionPage = () => {
  //Create onClick function for npc collection that displays all npcs in a table
  const [isNpcActive, setIsNpcActive] = useState(false);

  const onNpcClick = () => {
    setIsNpcActive(!isNpcActive);
  };

  const cardNpc = (
    <Card className={style.collectionCard} onClick={onNpcClick}>
      <h3>NPC Collection</h3>
      <p>Collection of all your NPCs!</p>
    </Card>
  );

  return (
    <div className={style.collectionWrapper}>
      <Navbar />
      <h1 className={style.collectionHeader}>Collections</h1>
      <div className={style.collectionCardWrapper}>
        {isNpcActive ? <CollectionTable tableName={"test"} /> : cardNpc}
      </div>
    </div>
  );
};

export default CollectionPage;
