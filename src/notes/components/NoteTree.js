import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { DataTable } from 'primereact/datatable';
import TreeTable from "./TreeTable";

const NoteTree = (props) => {
    const testClick = (e) => {
        console.log(e.target);
    }

  return (
    <>
      <div className={ns.noteTree}>
       <TreeTable />
       <TreeTable />
       <TreeTable />
       <TreeTable />
       <TreeTable />
      </div>
    </>
  );
};

export default NoteTree;
