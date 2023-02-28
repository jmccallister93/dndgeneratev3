import { useEffect, useState, useRef } from "react";
import ns from "../../stylesheets/Note.module.scss";

const NoteTreeTable = (props) => {
  function extractNames(objectArray) {
    if (!Array.isArray(objectArray)) return [];
    let names = [];
    for (let obj of objectArray) {
      names.push({ name: obj.name, id: obj.id });
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
        <h3>{props.header}</h3>
        <button className={ns.greenButton}>Create</button>
        <button className={ns.greenButton}>Generate</button>
        {names.map((obj, index) => (
          <div
            className={ns.noteTreeCategoryItem}
            key={index}
            onClick={() => handleClick(obj.id)}
          >
            {obj.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteTreeTable;
