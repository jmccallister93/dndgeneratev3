import { Card } from "primereact/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "../stylesheets/Collection.module.scss";
import CollectionTable from "./CollectionTable";

const CollectionPage = () => {
  //Create onClick function for npc collection that displays all npcs in a table
  const [isNpcActive, setIsNpcActive] = useState(false);
  const [isLocationActive, setIsLocationActive] = useState(false);
  const [isQuestActive, setIsQuestActive] = useState(false);
  const [isOrganisationActive, setIsOrganisationActive] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);

  const onNpcClick = () => {
    setIsNpcActive(!isNpcActive);
  };
  const onLocationClick = () => {
    setIsLocationActive(!isLocationActive);
  };
  const onQuestClick = () => {
    setIsQuestActive(!isQuestActive);
  };
  const onOrganisationClick = () => {
    setIsOrganisationActive(!isOrganisationActive);
  };
  const onItemClick = () => {
    setIsItemActive(!isItemActive);
  };

  const cardNpc = (
    <Card className={style.collectionCard} onClick={onNpcClick}>
      <h3>
        NPC's <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your NPCs!</p>
    </Card>
  );
  const cardLocation = (
    <Card className={style.collectionCard} onClick={onLocationClick}>
      <h3>
        Locations <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Locations!</p>
    </Card>
  );
  const cardQuest = (
    <Card className={style.collectionCard} onClick={onQuestClick}>
      <h3>
        Quests <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Quests!</p>
    </Card>
  );
  const cardOrganisation = (
    <Card className={style.collectionCard} onClick={onOrganisationClick}>
      <h3>
        Organisations <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Organisations!</p>
    </Card>
  );
  const cardItem = (
    <Card className={style.collectionCard} onClick={onItemClick}>
      <h3>
        Items <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Items!</p>
    </Card>
  );

  return (
    <div className={style.collectionWrapper}>
      <Navbar />
      <h1 className={style.collectionHeader}>Collections</h1>
      <div className={style.collectionCardWrapper}>
        {isNpcActive ? (
          <CollectionTable
            tableName={"test"}
            active={setIsNpcActive}
            collectionTitle={"NPC"}
          />
        ) : (
          cardNpc
        )}
        {isLocationActive ? (
          <CollectionTable
            tableName={"test"}
            active={setIsLocationActive}
            collectionTitle={"Locations"}
          />
        ) : (
          cardLocation
        )}
        {isQuestActive ? (
          <CollectionTable
            tableName={"test"}
            active={setIsQuestActive}
            collectionTitle={"Quests"}
          />
        ) : (
          cardQuest
        )}
        {isOrganisationActive ? (
          <CollectionTable
            tableName={"test"}
            active={setIsOrganisationActive}
            collectionTitle={"Organisations"}
          />
        ) : (
          cardOrganisation
        )}
        {isItemActive ? (
          <CollectionTable
            tableName={"test"}
            active={setIsItemActive}
            collectionTitle={"Items"}
          />
        ) : (
          cardItem
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
