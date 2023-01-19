import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { DataTable } from "primereact/datatable";
import TreeTable from "./TreeTable";

const NoteTree = (props) => {
  const testClick = (e) => {
    console.log(e.target);
  };

  const test = { name: "test", data: "test" };

  return (
    <>
      <div className={ns.noteTree}>
        <TreeTable
          header="Locations"
          value={[test.name]}
          onSelectedItem={(value) => props.onSelectedItem(value)}
        />
        <TreeTable header="Organizations" />
        <TreeTable header="NPCs" />
        <TreeTable header="Quests" />
        <TreeTable header="Items" />
      </div>
    </>
  );
};

export default NoteTree;
