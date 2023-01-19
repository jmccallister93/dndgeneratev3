import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { DataTable } from 'primereact/datatable';

const NoteTree = (props) => {
    const testClick = (e) => {
        console.log(e.target);
    }

  return (
    <>
      <div className={ns.noteTree}>
        <div className={ns.noteTreeCategory}>
        </div>
       
       <DataTable />
       <DataTable />
       <DataTable />
       <DataTable />
      </div>
    </>
  );
};

export default NoteTree;
