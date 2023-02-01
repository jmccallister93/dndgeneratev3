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
            // object={null}
            onSelectedItem={(value) => props.onSelectedItem(value)}
          />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable
            header="NPCs"
            object={props.object}
            onSelectedItem={(value) => props.onSelectedItem(value)}
          />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable
            header="Organizations"
            onSelectedItem={(value) => props.onSelectedItem(value)}
          />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable
            header="Quests"
            onSelectedItem={(value) => props.onSelectedItem(value)}
          />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable
            header="Items"
            onSelectedItem={(value) => props.onSelectedItem(value)}
          />
        </div>
      </div>
    </>
  );
};

export default NoteTree;
