import { useEffect, useState, useRef } from "react";
import ns from "../../stylesheets/Note.module.scss";

const NoteTreeTable = (props) => {
  function extractNames(objectArray) {
    console.log(props.object[0])
    let names = [];
    for (let obj of objectArray) {
      names.push(obj.name);
    }
    return names;
  }
  const names = extractNames(props.object);

  const handleClick = (key) => {
    props.onSelectedItem(key);
  };

  return (
    <>
      <div className={ns.noteTreeCategory}>
        {names.map((obj, index) => (
          <div key={index} onClick={() => handleClick(obj.key)}>
            {obj}
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteTreeTable;


