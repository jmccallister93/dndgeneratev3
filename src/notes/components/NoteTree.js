import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { DataTable } from "primereact/datatable";
import TreeTable from "./NoteTreeTable";
import NoteTreeTable from "./NoteTreeTable";
import supabase from "../../config/supabaseClient";


const NoteTree = (props) => {

  return (
    <>
      <div className={ns.noteTree}>
        <div className={ns.TreeTable}> 
          {" "}
          <NoteTreeTable
            header="Locations"
            object={props.object}
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
