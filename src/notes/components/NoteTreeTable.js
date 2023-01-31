import { useEffect, useState, useRef } from "react";
import ns from "../../stylesheets/Note.module.scss";

const NoteTreeTable = (props) => {
  function extractNames(objectArray) {
    let names = [];
    for (let obj of objectArray) {
      names.push({name: obj.data.name, key: obj.key});
      if (obj.children) {
        names = names.concat(extractNames(obj.children));
      }
    }
    return names;
  }
  const names = extractNames(props.object);

  const handleClick = (obj) => {
    props.onSelectedItem(obj);
  };


  return (
    <>
      <div className={ns.noteTreeCategory}>
        {names.map((obj, index) => (
          <div 
          key={index} 
          onClick={() => handleClick(obj)}>{obj.name}</div>
        ))}
      </div>
    </>
  );
};

export default NoteTreeTable;

{
  /* <div>{props.object[0].data.name}</div>
        <div>{props.object[0].children[0].data.name}</div>
        <div>{props.object[0].children[1].data.name}</div>
        <div>{props.object[0].children[1].children[0].data.name}</div>
        <div>{props.object[0].children[1].children[1].data.name}</div>
        <div>{props.object[1].data.name}</div> */
}
