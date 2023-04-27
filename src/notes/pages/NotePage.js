import React, { useEffect, useState, useCallback, useContext } from "react";
import { supabase } from "../../config/supabaseClient";

import style from "../../stylesheets/PageStyle.module.scss";
import ns from "../../stylesheets/Note.module.scss";
import Note from "../components/Note";
import NoteTree from "../components/NoteTree";
import { SessionContext } from "../../config/SessionContext";
import { Link } from "react-router-dom";

function NotePage(props) {
  const session = useContext(SessionContext);

  const [selectedId, setSelectedId] = useState({});
  const [selectedName, setSelectedName] = useState({});
  const [selectedNode, setSelectedNode] = useState({});
  const [, setFetchError] = useState(null);

  const [locationDetails, setLocationDetails] = useState([]);
  const [npcDetails, setNpcDetails] = useState([]);
  const [organizationDetails, setOrganizationDetails] = useState([]);
  const [questDetails, setQuestDetails] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);
  const [monsterDetails, setMonsterDetails] = useState([]);
  const [pantheonDetails, setPantheonDetails] = useState([]);
  const [villainDetails, setVillainDetails] = useState([]);

  const [noteText, setNoteText] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [deletedNode, setDeletedNode] = useState(null);

  const [dbTable, setDbTable] = useState("");


  sessionStorage.setItem("lastUrl", window.location.href);

  //Get Table Names
  useEffect(() => {
    const fetchUuidsAndTableNames = async () => {
      try {
        //Select all uuids from tables
        const npcResponse = await supabase.from("DBnpc").select("uuid");
        const locationResponse = await supabase
          .from("DBlocation")
          .select("uuid");
        const organizationResponse = await supabase
          .from("DBorganization")
          .select("uuid");
        const questResponse = await supabase.from("DBquest").select("uuid");
        const itemResponse = await supabase.from("DBitem").select("uuid");
        const monsterResponse = await supabase.from("DBmonster").select("uuid");
        const pantheonResponse = await supabase
          .from("DBpantheon")
          .select("uuid");
        const villainResponse = await supabase.from("DBvillain").select("uuid");

        //Create arrays of uuids
        const npcUuids = [].concat(npcResponse.data.map((npc) => npc.uuid));
        const locationUuids = [].concat(
          locationResponse.data.map((location) => location.uuid)
        );
        const organizationUuids = [].concat(
          organizationResponse.data.map((organization) => organization.uuid)
        );
        const questUuids = [].concat(
          questResponse.data.map((quest) => quest.uuid)
        );
        const itemUuids = [].concat(itemResponse.data.map((item) => item.uuid));
        const monsterUuids = [].concat(
          monsterResponse.data.map((monster) => monster.uuid)
        );
        const pantheonUuids = [].concat(
          pantheonResponse.data.map((pantheon) => pantheon.uuid)
        );
        const villainUuids = [].concat(
          villainResponse.data.map((villain) => villain.uuid)
        );

        //Compare selectedId to uuids to determine which table to update
        if (npcUuids.includes(selectedId)) {
          setDbTable("DBnpc");
        } else if (locationUuids.includes(selectedId)) {
          setDbTable("DBlocation");
        } else if (organizationUuids.includes(selectedId)) {
          setDbTable("DBorganization");
        } else if (questUuids.includes(selectedId)) {
          setDbTable("DBquest");
        } else if (itemUuids.includes(selectedId)) {
          setDbTable("DBitem");
        } else if (monsterUuids.includes(selectedId)) {
          setDbTable("DBmonster");
        } else if (pantheonUuids.includes(selectedId)) {
          setDbTable("DBpantheon");
        } else if (villainUuids.includes(selectedId)) {
          setDbTable("DBvillain");
        }
      } catch (error) {
        console.error("Error fetching tables:", error);
      }
    };
    fetchUuidsAndTableNames();
  }, [selectedId]);

  //Update Note from NoteText
  const updateNote = async (noteText) => {
    try {
      const response = await supabase
        .from(dbTable)
        .update({ notes: noteText })
        .eq("uuid", selectedId);

      setNoteText(noteText);
    } catch (error) {
      console.error("Error updating note:" + error);
    }
  };

  //Update Property from Property Value
  const updateSelectedNode = async (updatedNode) => {
    try {
      const response = await supabase
        .from(dbTable)
        .update(updatedNode)
        .eq("uuid", selectedId);
    } catch (error) {
      console.error("Error updating note:" + error);
    }
    setPropertyValue(updatedNode);

    // console.log("Fired")
  };

  //Delete Node
  const deleteSelectedNode = async () => {
    try {
      const response = await supabase
        .from(dbTable)
        .delete()
        .eq("uuid", selectedId);

      setDeletedNode(selectedId);
    } catch (error) {
      console.error("Error updating note:" + error);
    }
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
            email: r.email,
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
  }, [noteText, propertyValue, deletedNode, showPopup]);

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
            email: r.email,
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
  }, [noteText, propertyValue, deletedNode, showPopup]);

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
            email: r.email,
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
  }, [noteText, propertyValue, deletedNode, showPopup]);

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
            email: r.email,
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
  }, [noteText, propertyValue, deletedNode, showPopup]);

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
            email: r.email,
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
  }, [noteText, propertyValue, deletedNode, showPopup]);

  //Get Monsters
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("DBmonster")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setMonsterDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setMonsterDetails(
          dataName.map((r) => ({
            email: r.email,
            links: r.links,
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
            notes: r.notes,
          }))
        );
      }
    };
    fetchData();
  }, [noteText, propertyValue, deletedNode, showPopup]);

  //Get Pantheon
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
            email: r.email,
          }))
        );
      }
    };
    fetchData();
  }, [noteText, propertyValue, deletedNode, showPopup]);

  //Get Villain
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
            notes: r.notes,
            email: r.email,
          }))
        );
      }
    };
    fetchData();
  }, [noteText, propertyValue, deletedNode, showPopup]);

  //Gets details of selected node
  const handleSelectedNode = useCallback(() => {
    const allDetails = npcDetails.concat(
      locationDetails,
      organizationDetails,
      questDetails,
      itemDetails,
      monsterDetails,
      pantheonDetails,
      villainDetails
    );
    setSelectedNode(allDetails.find((r) => r.uuid === selectedId));
  }, [
    selectedId,
    npcDetails,
    locationDetails,
    organizationDetails,
    questDetails,
    itemDetails,
    monsterDetails,
    pantheonDetails,
    villainDetails,
  ]);

  useEffect(() => {
    handleSelectedNode();
  }, [handleSelectedNode]);

  return (
    <div className={style.mainWrapper}>
      {session === null ? (
        <>
          <p className={style.loginMessage}>
            Please{" "}
            <Link to="/login" className={style.loginButtonText}>
              Login
            </Link>{" "}
            to continue to the Campaign Page.
          </p>
          {/* <p className={style.loginMessage}>
            Logging in will redirect you to the Home Page.
          </p> */}
        </>
      ) : (
        <>
          <div className={style.topHeader}>
            <h1 className={style.mainHeader}>Campaign Notes</h1>
          </div>
          <div className={ns.grid2}>
            <NoteTree
              location={locationDetails}
              npc={npcDetails}
              organization={organizationDetails}
              quest={questDetails}
              item={itemDetails}
              monster={monsterDetails}
              pantheon={pantheonDetails}
              villain={villainDetails}
              selectedNode={selectedNode}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
              setSelectedName={setSelectedName}
              selectedName={selectedName}
              deleteSelectedNode={deleteSelectedNode}
              setShowPopup={setShowPopup}
            />
            <Note
              location={locationDetails}
              npc={npcDetails}
              organization={organizationDetails}
              quest={questDetails}
              item={itemDetails}
              monster={monsterDetails}
              selectedNode={selectedNode}
              setSelectedNode={setSelectedNode}
              updateNote={updateNote}
              updateSelectedNode={updateSelectedNode}
              setPropertyValue={setPropertyValue}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default NotePage;
