import { useEffect, useState, useRef } from "react";
import ns from "../../stylesheets/Note.module.scss";

const NoteTreeTable = (props) => {
  function extractNames(objectArray) {
    let names = [];
    for (let obj of objectArray) {
      names.push({name: obj.name, id: obj.id});
    }
    return names;
  }
  const names = extractNames(props.object);

  const handleClick = (id) => {
    props.onSelectedItem(id);
  };

  return (
    <>
      <div className={ns.noteTreeCategory}>
        {names.map((obj, index) => (
          <div key={index} onClick={() => handleClick(obj.id)}>
            {obj.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteTreeTable;


