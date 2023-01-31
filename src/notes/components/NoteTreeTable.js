import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useEffect, useState, useRef } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { TreeTable } from "primereact/treetable";

const NoteTreeTable = (props) => {
  // function extractNames(node, names = []) {
  //   console.log(node[0])
  //   if (!node) {
  //     console.log("no node");
  //     return names;
  //   }
    
  //   // Breaking right here
  //   if (!node.data){
  //     console.log("no data");
  //     return names;
  //   } 
  //   //Never reaches here
  //   console.log(node);
  //   names.push(node.data.name);
    
  //   if (!node.children) {
  //     console.log("no children");
  //     return names;
  //   }
  //   for (const child of node.children) {
  //     console.log(node);
  //     extractNames(child, names);
  //   }
    
  //   return names;
  // }
  function extractNames(objectArray) {
    let names = [];
    for (let obj of objectArray) {
      names.push(obj.data.name);
      if (obj.children) {
        names = names.concat(extractNames(obj.children));
      }
    }
    return names;
  }
  const names = extractNames(props.object);
  return (
    <>
      <div className={ns.noteTreeCategory}>
        {/* <div>{props.object[0].data.name}</div>
        <div>{props.object[0].children[0].data.name}</div>
        <div>{props.object[0].children[1].data.name}</div>
        <div>{props.object[0].children[1].children[0].data.name}</div>
        <div>{props.object[0].children[1].children[1].data.name}</div>
        <div>{props.object[1].data.name}</div> */}
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </>
  );
};

export default NoteTreeTable;
