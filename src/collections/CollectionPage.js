import { Card } from "primereact/card";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../stylesheets/Collection.module.scss";
import ps from "../stylesheets/PageStyle.module.scss";
import CollectionTable from "./CollectionTable";
import { SessionContext } from "../config/SessionContext";
import { supabase } from "../config/supabaseClient";

const CollectionPage = () => {
  const session = useContext(SessionContext);

  const [, setFetchError] = useState(null); 

  const [locationDetails, setLocationDetails] = useState([]);
  const [npcDetails, setNpcDetails] = useState([]);
  const [organizationDetails, setOrganizationDetails] = useState([]);
  const [monsterDetails, setMonsterDetails] = useState([]);
  const [questDetails, setQuestDetails] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);
  const [pantheonDetails, setPantheonDetails] = useState([]);
  const [villainDetails, setVillainDetails] = useState([]);

  const [, setDisplayLocation] = useState([]);
  const [, setDisplayNpc] = useState([]);
  const [, setDisplayOrganization] = useState([]);
  const [, setDisplayMonster] = useState([]);
  const [, setDisplayQuest] = useState([]);
  const [, setDisplayItem] = useState([]);
  const [, setDisplayPantheon] = useState([]);
  const [, setDisplayVillain] = useState([]);

  //Create onClick function for npc collection that displays all npcs in a table
  const [isNpcActive, setIsNpcActive] = useState(false);
  const [isLocationActive, setIsLocationActive] = useState(false);
  const [isQuestActive, setIsQuestActive] = useState(false);
  const [isOrganizationActive, setIsOrganizationActive] = useState(false);
  const [isMonsterActive, setIsMonsterActive] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);
  const [isPantheonActive, setIsPantheonActive] = useState(false);
  const [isVillainActive, setIsVillainActive] = useState(false);

  const [, setSelectedItem] = useState(null);

  sessionStorage.setItem('lastUrl', window.location.href);

  const onNpcClick = () => {
    setIsNpcActive(!isNpcActive);
  };
  const onLocationClick = () => {
    setIsLocationActive(!isLocationActive);
  };
  const onQuestClick = () => {
    setIsQuestActive(!isQuestActive);
  };
  const onOrganizationClick = () => {
    setIsOrganizationActive(!isOrganizationActive);
  };
  const onMonsterClick = () => {
    setIsMonsterActive(!isMonsterActive);
  };
  const onItemClick = () => {
    setIsItemActive(!isItemActive);
  };
  const onPantheonClick = () => {
    setIsPantheonActive(!isPantheonActive);
  };
  const onVillainClick = () => {
    setIsVillainActive(!isVillainActive);
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

  //Get Monsters
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("DBmonster")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setOrganizationDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setMonsterDetails(
          dataName.map((r) => ({
            folder: r.folder,
            uuid: r.uuid,
            name: r.name,
            size: r.size,
            type: r.type,
            alignment: r.alignment,
            ac: r.ac,
            armorType: r.armorType,
            hp: r.hp,
            speed: r.speed,
            fly: r.fly,
            swim: r.swim,
            climb: r.climb,
            str: r.str,
            dex: r.dex,
            con: r.con,
            int: r.int,
            wis: r.wis,
            cha: r.cha,
            save: r.save,
            skill: r.skill,
            sense: r.sense,
            language: r.language,
            vuln: r.vuln,
            resist: r.resist,
            immune: r.immune,
            condition: r.condition,
            ability: r.ability,
            action: r.action,
            legendary: r.legendary,
            lair: r.lair,
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

  //Get Pantheons
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("DBpantheon")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setPantheonDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setPantheonDetails(
          dataName.map((r) => ({
            folder: r.folder,
            uuid: r.uuid,
            name: r.name,
            type: r.type,
            alignment: r.alignment,
            size: r.size,
            plane: r.plane,
            domain: r.domain,
            motive: r.motive,
            provide: r.provide,
            artifact: r.artifact,
            notes: r.notes,
            links: r.links,
          }))
        );
      }
    };
    fetchData();
  }, []);

  //Get Villains
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("DBvillain")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setVillainDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setVillainDetails(
          dataName.map((r) => ({
            folder: r.folder,
            uuid: r.uuid,
            name: r.name,
            race: r.race,
            sex: r.sex,
            age: r.age,
            height: r.height,
            weight: r.weight,
            hairColor: r.hairColor,
            hairType: r.hairType,
            hairStyle: r.hairStyle,
            beardStyle: r.beardStyle,
            eyes: r.eyeColor,
            skin: r.skinColor,
            motive: r.motive,
            goal: r.goal,
            affiliation: r.affiliation,
            weakness: r.weakness,
            powerSource: r.powerSource,
            minion: r.minion,
            stronghold: r.stronghold,
            ac: r.ac,
            armorType: r.armorType,
            hp: r.hp,
            speed: r.speed,
            fly: r.fly,
            swim: r.swim,
            climb: r.climb,
            burrow: r.burrow,
            hover: r.hover,
            str: r.str,
            dex: r.dex,
            con: r.con,
            int: r.int,
            wis: r.wis,
            cha: r.cha,
            save: r.save,
            skill: r.skill,
            sense: r.sense,
            language: r.language,
            vuln: r.vuln,
            resist: r.resist,
            immune: r.immune,
            condition: r.condition,
            ability: r.ability,
            action: r.action,
            legendary: r.legendary,
            lair: r.lair,
            email: r.email,
            notes: r.notes,
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

  //Set Selected Monsters
  useEffect(() => {
    setDisplayMonster(
      monsterDetails.map((item) => {
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
  }, [monsterDetails]);

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

  //Set Selected Pantheon
  useEffect(() => {
    setDisplayPantheon(
      pantheonDetails.map((item) => {
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
  }, [pantheonDetails]);

   //Set Selected Villains
   useEffect(() => {
    setDisplayVillain(
      villainDetails.map((item) => {
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
  }, [villainDetails]);

  //Create Cards
  const cardNpc = (
    <div
      className={ps.collectionCard}
      onClick={onNpcClick}
    >
      <h3>
        NPC's <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your NPCs!</p>
    </div>
  );
  const cardLocation = (
    <div
      className={ps.collectionCard}
      onClick={onLocationClick}
    >
      <h3>
        Locations <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Locations!</p>
    </div>
  );
  const cardQuest = (
    <div
      className={ps.collectionCard}
      onClick={onQuestClick}
    >
      <h3>
        Quests <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Quests!</p>
    </div>
  );
  const cardOrganization = (
    <div
      className={ps.collectionCard}
      onClick={onOrganizationClick}
    >
      <h3>
        Organizations <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Organizations!</p>
    </div>
  );
  const cardMonster = (
    <div
      className={ps.collectionCard}
      onClick={onMonsterClick}
    >
      <h3>
        Monsters <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Monsters!</p>
    </div>
  );
  const cardItem = (
    <div
      className={ps.collectionCard}
      onClick={onItemClick}
    >
      <h3>
        Items <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Items!</p>
    </div>
  );
  const cardPantheon = (
    <div
      className={ps.collectionCard}
      onClick={onPantheonClick}
    >
      <h3>
        Pantheons <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Pantheons!</p>
    </div>
  );
  const cardVillain = (
    <div
      className={ps.collectionCard}
      onClick={onVillainClick}
    >
      <h3>
        Villains <i className="pi pi-chevron-right"></i>
      </h3>
      <p>Collection of all your Villains!</p>
    </div>
  );

  return (
    <div className={style.collectionWrapper}>
      
      {session === null ? (
       <>
       <p className={ps.loginMessage}>
         Please{" "}
         <Link to="/login" className={ps.loginButtonText}>
           Login
         </Link>{" "}
         to continue to the Collection Page.
       </p>
       {/* <p className={style.loginMessage}>
         Logging in will redirect you to the Home Page.
       </p> */}
     </>
      ) : (<>
        <h1 className={style.collectionHeader}>Collections</h1> 
        <div className={style.collectionCardWrapper}>
          {isNpcActive ? (
            <CollectionTable
              data={npcDetails}
              active={setIsNpcActive}
              collectionTitle={"NPC's"}
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
            cardOrganization
          )}
          {isMonsterActive ? (
            <CollectionTable
              data={monsterDetails}
              active={setIsMonsterActive}
              collectionTitle={"Monsters"}
              isItemActive={isItemActive}
              setIsItemActive={setIsItemActive}
            />
          ) : (
            cardMonster
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
           {isPantheonActive ? (
            <CollectionTable
              data={pantheonDetails}
              active={setIsPantheonActive}
              collectionTitle={"Pantheons"}
              isItemActive={isItemActive}
              setIsItemActive={setIsItemActive}
            />
          ) : (
            cardPantheon
          )}
            {isVillainActive ? (
            <CollectionTable
              data={villainDetails}
              active={setIsVillainActive}
              collectionTitle={"Villains"}
              isItemActive={isItemActive}
              setIsItemActive={setIsItemActive}
            />
          ) : (
            cardVillain
          )}
        </div>
        </>
      )}
    </div>
  );
};

export default CollectionPage;
