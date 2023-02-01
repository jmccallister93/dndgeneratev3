import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { DataTable } from "primereact/datatable";
import TreeTable from "./NoteTreeTable";
import NoteTreeTable from "./NoteTreeTable";
import supabase from "../../config/supabaseClient";


const NoteTree = (props) => {
  const [fetchError, setFetchError] = useState(null);
  const [objectDetails, setObjectDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(props.tableName)
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
            name: r.name,
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
          }))
        );
      }
    };
    fetchData();
    console.log(objectDetails)
  }, []);

  return (
    <>
      <div className={ns.noteTree}>
        <div className={ns.TreeTable}> 
          {" "}
          <NoteTreeTable
            header="Locations"
            object={objectDetails}
            // objectKey={props.test.key}
            onSelectedItem={(value) => props.onSelectedItem(value)}
          />
        </div>
        <div className={ns.TreeTable}>
          {/* <NoteTreeTable
            header="Organizations"
            value={test2}
            onSelectedItem={(value) => props.onSelectedItem(value)}
          /> */}
        </div>
        <div className={ns.TreeTable}>
          {/* <NoteTreeTable header="NPCs" /> */}
        </div>
        <div className={ns.TreeTable}>
          {/* <NoteTreeTable header="Quests" /> */}
        </div>
        <div className={ns.TreeTable}>
          {/* <NoteTreeTable header="Items" /> */}
        </div>
      </div>
    </>
  );
};

export default NoteTree;
