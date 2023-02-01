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
  function handleMouseDown(e, index) {
    console.log("Mouse down")
  }
  function handleMouseUp() {
    console.log("mouse up");
  }
  function handleMouseMove() {
    console.log("mouse move");
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className={ns.noteTreeCategory}>
        <h3>{props.header}</h3>
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
