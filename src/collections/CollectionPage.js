import { Card } from "primereact/card";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "../stylesheets/Collection.module.scss";
import CollectionTable from "./CollectionTable";
import { SessionContext } from "../config/SessionContext";
import { supabase } from "../config/supabaseClient";

const CollectionPage = () => {
  const session = useContext(SessionContext);

  const [fetchError, setFetchError] = useState(null);

  const [locationDetails, setLocationDetails] = useState([]);
  const [npcDetails, setNpcDetails] = useState([]);
  const [organizationDetails, setOrganizationDetails] = useState([]);
  const [questDetails, setQuestDetails] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);

  const [displayLocation, setDisplayLocation] = useState([]);
  const [displayNpc, setDisplayNpc] = useState([]);
  const [displayOrganization, setDisplayOrganization] = useState([]);
  const [displayQuest, setDisplayQuest] = useState([]);
  const [displayItem, setDisplayItem] = useState([]);

  //Create onClick function for npc collection that displays all npcs in a table
  const [isNpcActive, setIsNpcActive] = useState(false);
  const [isLocationActive, setIsLocationActive] = useState(false);
  const [isQuestActive, setIsQuestActive] = useState(false);
  const [isOrganizationActive, setIsOrganizationActive] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

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
    setIsOrganizationActive(!isOrganizationActive);
  };
  const onItemClick = () => {
    setIsItemActive(!isItemActive);
  };

  //Get Locations
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("DBlocation")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setLocationDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setLocationDetails(
          dataName.map((r) => ({
            folder: r.folder,
            uuid: r.uuid,
            name: r.name,
            type: r.type,
            size: r.size,
            population: r.population,
            atmosphere: r.atmosphere,
            culture: r.culture,
            terrain: r.terrain,
            landmark: r.landmark,
            govern: r.govern,
            guild: r.guild,
            event: r.event,
            faction: r.faction,
            npc: r.npc,
            building: r.building,
            district: r.district,
            notes: r.notes,
            links: r.links,
          }))
        );
      }
    };
    fetchData();
  }, []);

  //Get NPCs
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("DBnpc")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setNpcDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setNpcDetails(
          dataName.map((r) => ({
            folder: r.folder,
            uuid: r.uuid,
            name: r.name,
            age: r.age,
            height: r.height,
            weight: r.weight,
            race: r.race,
            sex: r.sex,
            align: r.align,
            prof: r.prof,
            feature: r.feature,
            talent: r.talent,
            mannerism: r.mannerism,
            interaction: r.interaction,
            bond: r.bond,
            questType: r.questType,
            hook: r.hook,
            str: r.str,
            dex: r.dex,
            con: r.con,
            int: r.int,
            wis: r.wis,
            cha: r.cha,
            action: r.action,
            weaponBonus: r.weaponBonus,
            weaponDamage: r.weaponDamage,
            weaponProperties: r.weaponProperties,
            selectedItem: r.selectedItem,
            ac: r.ac,
            hp: r.hp,
            speed: r.speed,
            notes: r.notes,
            links: r.links,
          }))
        );
      }
    };
    fetchData();
  }, []);

  //Get Organizations
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("DBorganization")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setOrganizationDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setOrganizationDetails(
          dataName.map((r) => ({
            folder: r.folder,
            uuid: r.uuid,
            name: r.name,
            wealth: r.wealth,
            influence: r.influence,
            structure: r.structure,
            defence: r.defence,
            origin: r.origin,
            logo: r.logo,
            leader: r.leader,
            income: r.income,
            item: r.item,
            influenceTactic: r.influenceTactic,
            favored: r.favored,
            positive: r.positive,
            neutral: r.neutral,
            unwelcome: r.unwelcome,
            intolerant: r.intolerant,
            service: r.service,
            initiation: r.initiation,
            lowRole: r.lowRole,
            mediumRole: r.mediumRole,
            highRole: r.highRole,
            quest: r.quest,
            advance: r.advance,
            belief: r.belief,
            orgType: r.orgType,
            headquarter: r.headquarter,
            building: r.building,
            location: r.location,
            stronghold: r.stronghold,
            resource: r.resource,
            motive: r.motive,
            power: r.power,
            specialty: r.specialty,
            weakness: r.weakness,
            notes: r.notes,
            links: r.links,
          }))
        );
      }
    };
    fetchData();
  }, []);

  //Get Quests
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("DBquest")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setQuestDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setQuestDetails(
          dataName.map((r) => ({
            folder: r.folder,
            uuid: r.uuid,
            name: r.name,
            questType: r.questType,
            reward: r.reward,
            location: r.location,
            motive: r.motive,
            twist: r.twist,
            notes: r.notes,
            links: r.links,
          }))
        );
      }
    };
    fetchData();
  }, []);

  //Get Items
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("DBitem")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setItemDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setItemDetails(
          dataName.map((r) => ({
            folder: r.folder,
            uuid: r.uuid,
            name: r.name,
            type: r.type,
            rarity: r.rarity,
            cost: r.cost,
            weight: r.weight,
            description: r.description,
            notes: r.notes,
            links: r.links,
          }))
        );
      }
    };
    fetchData();
  }, []);

  //Show popup of details
  const showPopup = () => {
    setIsItemActive((current) => !current);
  };

  //Set Selected NPC
  useEffect(() => {
    setDisplayNpc(
      npcDetails.map((item) => {
        return (
          <>
            <span
              className="editText"
              contentEditable="false"
              suppressContentEditableWarning={true}
              onClick={() => setSelectedItem(Object.entries(item))}
            >
              <span className={style.minorText3} onClick={showPopup}>
                {item === undefined ? null : `${item.name} `}
                <i className="pi pi-info-circle"></i>
                <br></br>
              </span>
            </span>
          </>
        );
      })
    );
  }, [npcDetails]);

  //Set Selected Locations
  useEffect(() => {
    setDisplayLocation(
      locationDetails.map((item) => {
        return (
          <>
            <span
              className="editText"
              contentEditable="false"
              suppressContentEditableWarning={true}
              onClick={() => setSelectedItem(Object.entries(item))}
            >
              <span className={style.minorText3} onClick={showPopup}>
                {item === undefined ? null : `${item.name} `}
                <i className="pi pi-info-circle"></i>
                <br></br>
              </span>
            </span>
          </>
        );
      })
    );
  }, [locationDetails]);

  //Set Selected Quests
  useEffect(() => {
    setDisplayQuest(
      questDetails.map((item) => {
        return (
          <>
            <span
              className="editText"
              contentEditable="false"
              suppressContentEditableWarning={true}
              onClick={() => setSelectedItem(Object.entries(item))}
            >
              <span className={style.minorText3} onClick={showPopup}>
                {item === undefined ? null : `${item.name} `}
                <i className="pi pi-info-circle"></i>
                <br></br>
              </span>
            </span>
          </>
        );
      })
    );
  }, [questDetails]);

  //Set Selected Organization
  useEffect(() => {
    setDisplayOrganization(
      organizationDetails.map((item) => {
        return (
          <>
            <span
              className="editText"
              contentEditable="false"
              suppressContentEditableWarning={true}
              onClick={() => setSelectedItem(Object.entries(item))}
            >
              <span className={style.minorText3} onClick={showPopup}>
                {item === undefined ? null : `${item.name} `}
                <i className="pi pi-info-circle"></i>
                <br></br>
              </span>
            </span>
          </>
        );
      })
    );
  }, [organizationDetails]);

  //Set Selected Items
  useEffect(() => {
    setDisplayItem(
      itemDetails.map((item) => {
        return (
          <>
            <span
              className="editText"
              contentEditable="false"
              suppressContentEditableWarning={true}
              onClick={() => setSelectedItem(Object.entries(item))}
            >
              <span className={style.minorText3} onClick={showPopup}>
                {item === undefined ? null : `${item.name} `}
                <i className="pi pi-info-circle"></i>
                <br></br>
              </span>
            </span>
          </>
        );
      })
    );
  }, [itemDetails]);

  //Create Cards
  const cardNpc = (
    <Card
      className={style.collectionCard}
      onClick={onNpcClick}
      style={{ borderRadius: "10px" }}
    >
      <h3>
        NPC's <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your NPCs!</p>
    </Card>
  );
  const cardLocation = (
    <Card
      className={style.collectionCard}
      onClick={onLocationClick}
      style={{ borderRadius: "10px" }}
    >
      <h3>
        Locations <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Locations!</p>
    </Card>
  );
  const cardQuest = (
    <Card
      className={style.collectionCard}
      onClick={onQuestClick}
      style={{ borderRadius: "10px" }}
    >
      <h3>
        Quests <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Quests!</p>
    </Card>
  );
  const cardOrganisation = (
    <Card
      className={style.collectionCard}
      onClick={onOrganisationClick}
      style={{ borderRadius: "10px" }}
    >
      <h3>
        Organizations <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Organizations!</p>
    </Card>
  );
  const cardItem = (
    <Card
      className={style.collectionCard}
      onClick={onItemClick}
      style={{ borderRadius: "10px" }}
    >
      <h3>
        Items <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Items!</p>
    </Card>
  );

  return (
    <div className={style.collectionWrapper}>
      <h1 className={style.collectionHeader}>Collections</h1>
      {session === null ? (
        <>
          <p className={style.loginMessage}>
            Please Login to continue to the Collections Page.
          </p>
          <p className={style.loginMessage}>
            Logging in will redirect you to the Home Page.
          </p>
        </>
      ) : (
        <div className={style.collectionCardWrapper}>
          {isNpcActive ? (
            <CollectionTable
              data={npcDetails}
              active={setIsNpcActive}
              collectionTitle={"NPC"}
              isItemActive={isItemActive}
              setIsItemActive={setIsItemActive}
            />
          ) : (
            cardNpc
          )}
          {isLocationActive ? (
            <CollectionTable
              data={locationDetails}
              active={setIsLocationActive}
              collectionTitle={"Locations"}
              isItemActive={isItemActive}
              setIsItemActive={setIsItemActive}
            />
          ) : (
            cardLocation
          )}
          {isQuestActive ? (
            <CollectionTable
              data={questDetails}
              active={setIsQuestActive}
              collectionTitle={"Quests"}
              isItemActive={isItemActive}
              setIsItemActive={setIsItemActive}
            />
          ) : (
            cardQuest
          )}
          {isOrganizationActive ? (
            <CollectionTable
              data={organizationDetails}
              active={setIsOrganizationActive}
              collectionTitle={"Organizations"}
              isItemActive={isItemActive}
              setIsItemActive={setIsItemActive}
            />
          ) : (
            cardOrganisation
          )}
          {isItemActive ? (
            <CollectionTable
              data={itemDetails}
              active={setIsItemActive}
              collectionTitle={"Items"}
              isItemActive={isItemActive}
              setIsItemActive={setIsItemActive}
            />
          ) : (
            cardItem
          )}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
