import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useEffect, useState, useRef } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { TreeTable } from "primereact/treetable";

const NoteTreeTable = (props) => {
  // const { objectKey, object: { data, children } } = props;
useEffect(() => {
  console.log(props.object[1]);
}, [props.object]);
 
  return (
    <>
      <div className={ns.noteTreeCategory}>
        <div>{props.object[0].data.name}</div>
        <div>{props.object[0].children[0].data.name}</div>
        <div>{props.object[0].children[1].data.name}</div>
        <div>{props.object[0].children[1].children[0].data.name}</div>
        <div>{props.object[0].children[1].children[1].data.name}</div>
        <div>{props.object[1].data.name}</div>
      </div>
    </>
  );
};

export default NoteTreeTable;
