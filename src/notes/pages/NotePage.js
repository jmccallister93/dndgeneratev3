import React, { useEffect, useRef, useState } from "react";
import supabase from "../../config/supabaseClient";
import Navbar from "../../components/Navbar";
import style from "../../stylesheets/PageStyle.module.scss";
import ns from "../../stylesheets/Note.module.scss";
import Note from "../components/Note";
import NoteTree from "../components/NoteTree";

function NotePage() {
  const [selectedId, setSelectedId] = useState({});
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

  const updateNote = async (noteText) => {
    try {
      const response = await supabase
        .from("test")
        .update({ notes: noteText })
        .eq("id", selectedId);

      setNoteText(noteText);
    } catch (error) {
      console.error("Error updating note:" + error);
    }
  };

  const updateSelectedNode = async (updatedNode) => {
    try {
      const response = await supabase
        .from("test")
        .update(updatedNode)
        .eq("id", selectedId);
      // update the objectDetails state with the updated node
      setNpcDetails((prev) =>
        prev.map((node) => (node.id === selectedId ? updatedNode : node))
      );
    } catch (error) {
      console.error("Error updating note:" + error);
    }
  };

  const deleteSelectedNode = async () => {
    try {
      const response = await supabase
        .from("test")
        .delete()
        .eq("id", selectedId);

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
          id: r.id,
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
            id: r.id,
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

  useEffect(() => {
    setSelectedNode(npcDetails.find((r) => r.id === selectedId));
  }, [selectedId, npcDetails]);

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
          onSelectedItem={setSelectedId}
          selectedItem={selectedId}
          deleteSelectedNode={deleteSelectedNode}
          setShowPopup={setShowPopup}
        />
        <Note
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          updateNote={updateNote}
          updateSelectedNode={updateSelectedNode}
          setPropertyValue={setPropertyValue}
        />
      </div>
    </div>
  );
}

export default NotePage;
