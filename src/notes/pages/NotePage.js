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
  const [property, setProperty] = useState("");
  const [propertyValue, setPropertyValue] = useState("");

  const updateNote = async (noteText) => {
    try {
      const response = await supabase
        .from("test")
        .update({ notes: noteText })
        .eq("id", selectedId)

        setNoteText(noteText);

    } catch (error) {
      console.error("Error updating note:" + error);
    }
  };

  const updateProperty = async (prop, propertyValue ) => {
    try {
      const response = await supabase
        .from("test")
        .update({ prop: propertyValue })
        .eq("id", selectedId)

        setPropertyValue(propertyValue);

    } catch (error) {
      console.error("Error updating property:" + error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("test")
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
  }, [noteText, propertyValue]);

  useEffect(() => {
    setSelectedNode(objectDetails.find((r) => r.id === selectedId));
  }, [selectedId, objectDetails]);

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Campaign Notes</h1>
      </div>
      <div className={ns.flex1}>
        <NoteTree object={objectDetails} onSelectedItem={setSelectedId} />
        <Note
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          updateNote={updateNote}
          updateProperty = {updateProperty}
        />
      </div>
    </div>
  );
}

export default NotePage;
