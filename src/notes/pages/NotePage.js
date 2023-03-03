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
  const [objectDetails, setObjectDetails] = useState([]);
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
      setObjectDetails((prev) =>
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

  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("DBnpc")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setObjectDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setObjectDetails(
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
    setSelectedNode(objectDetails.find((r) => r.id === selectedId));
  }, [selectedId, objectDetails]);

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Campaign Notes</h1>
      </div>
      <div className={ns.grid2}>
        <NoteTree
          object={objectDetails}
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
