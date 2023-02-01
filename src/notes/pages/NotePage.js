import React, { useEffect, useRef, useState } from "react";
import supabase from "../../config/supabaseClient"; // import the supabase client
import Navbar from "../../components/Navbar";
import style from "../../stylesheets/PageStyle.module.scss";
import ns from "../../stylesheets/Note.module.scss";
import Note from "../components/Note";
import NoteTree from "../components/NoteTree";

function NotePage() {
  const [selectedKey, setSelectedKey] = useState({});
  const [selectedNode, setSelectedNode] = useState({});
  const [fetchError, setFetchError] = useState(null);
  const [objectDetails, setObjectDetails] = useState([]);

  // useEffect(() => {
  //   const fetchData = async (tableName) => {
  //     const { data: dataName, error: errorName } = await supabase
  //       .from(tableName)
  //       .select();
  //     if (errorName) {
  //       setFetchError("Could not fetch the data");
  //       console.log(errorName);
  //       setObjectDetails(null);
  //     }
  //     if (dataName) {
  //       setFetchError(null);
  //       setObjectDetails(
  //         dataName.map((r) => ({
  //           name: r.name,
  //           race: r.race,
  //           sex: r.sex,
  //           align: r.align,
  //           prof: r.prof,
  //           feature: r.feature,
  //           talent: r.talent,
  //           mannerism: r.mannerism,
  //           interaction: r.interaction,
  //           bond: r.bond,
  //           questType: r.questType,
  //           hook: r.hook,
  //           str: r.str,
  //           dex: r.dex,
  //           con: r.con,
  //           int: r.int,
  //           wis: r.wis,
  //           cha: r.cha,
  //           action: r.action,
  //           weaponBonus: r.weaponBonus,
  //           weaponDamage: r.weaponDamage,
  //           weaponProperties: r.weaponProperties,
  //           selectedItem: r.selectedItem,
  //           ac: r.ac,
  //           hp: r.hp,
  //           speed: r.speed,
  //         }))
  //       );
  //     }
  //   };
  //   fetchData("test");
  //   console.log(objectDetails)
  // }, []);

  // useEffect(() => {
  //   setSelectedNode(test.find((node) => node.key === selectedKey) || {});
  // }, [selectedKey]);

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Campaign Notes</h1>
      </div>
      <div className={ns.flex1}>
        <NoteTree
          tableName={"test"}
          objs={objectDetails}
          onSelectedItem={setSelectedKey}
        />
        <Note selectedNode={selectedNode} />
      </div>
    </div>
  );
}

export default NotePage;
