import React, { useEffect, useRef, useState } from "react";
import supabase from "../../config/supabaseClient";
import Navbar from "../../components/Navbar";
import style from "../../stylesheets/PageStyle.module.scss";
import ns from "../../stylesheets/Note.module.scss";
import Note from "../components/Note";
import NoteTree from "../components/NoteTree";

function NotePage() {
  const [selectedId, setSelectedId] = useState({});
  const [selectedName, setSelectedName] = useState({});
  const [selectedNode, setSelectedNode] = useState({});
  const [fetchError, setFetchError] = useState(null);

  const [locationDetails, setLocationDetails] = useState([]);
  const [npcDetails, setNpcDetails] = useState([]);
  const [organizationDetails, setOrganizationDetails] = useState([]);
  const [questDetails, setQuestDetails] = useState([]);
  const [itemDetails, setItemDetails] = useState([]);

  const [noteText, setNoteText] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [deletedNode, setDeletedNode] = useState(null);

  const [dbTable, setDbTable] = useState("");


  //Get Table Names
  useEffect(() => {
  const fetchUuidsAndTableNames = async () => {
    try {
      //Select all uuids from tables
      const npcResponse = await supabase.from("DBnpc").select("uuid");
      const locationResponse = await supabase.from("DBlocation").select("uuid");
      const organizationResponse = await supabase
        .from("DBorganization")
        .select("uuid");
      const questResponse = await supabase.from("DBquest").select("uuid");
      const itemResponse = await supabase.from("DBitem").select("uuid");

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
      }
    } catch (error) {
      console.error("Error fetching tables:", error);
    }
  }
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
  }, [noteText, propertyValue, showPopup, deletedNode]);

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
          }))
        );
      }
    };
    fetchData();
  }, [noteText, propertyValue, showPopup, deletedNode]);

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
          }))
        );
      }
    };
    fetchData();
  }, [noteText, propertyValue, showPopup, deletedNode]);

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
            uuid: r.uuid,
            name: r.name,
            questType: r.questType,
            reward: r.reward,
            location: r.location,
            motive: r.motive,
            twist: r.twist,
            notes: r.notes,
          }))
        );
      }
    };
    fetchData();
  }, [noteText, propertyValue, showPopup, deletedNode]);

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
            uuid: r.uuid,
            name: r.name,
            type: r.type,
            rarity: r.rarity,
            cost: r.cost,
            weight: r.weight,
            description: r.description,
            notes: r.notes,
          }))
        );
      }
    };
    fetchData();
  }, [noteText, propertyValue, showPopup, deletedNode]);

  //Get Selected node based on uuid
  useEffect(() => {
    const allDetails = npcDetails.concat(
      locationDetails,
      organizationDetails,
      questDetails,
      itemDetails
    );
    setSelectedNode(allDetails.find((r) => r.uuid === selectedId));
  }, [
    selectedId,
    npcDetails,
    locationDetails,
    organizationDetails,
    questDetails,
    itemDetails,
  ]);

  return (
    <div className={style.mainWrapper}>
      <Navbar />
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
          setSelectedId={setSelectedId}
          selectedId={selectedId}
          setSelectedName={setSelectedName}
          selectedName={selectedName}
          deleteSelectedNode={deleteSelectedNode}
          setShowPopup={setShowPopup}
        />
        <Note
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          updateNote={updateNote}
          updateSelectedNode={updateSelectedNode}
          setPropertyValue={setPropertyValue}
          location={locationDetails}
          npc={npcDetails}
          organization={organizationDetails}
          quest={questDetails}
          item={itemDetails}
        />
      </div>
    </div>
  );
}

export default NotePage;
