import { useEffect, useState, useRef } from "react";
import NpcGen from "../../pages/NpcGen";
import ns from "../../stylesheets/Note.module.scss";
import NpcCreate from "./NpcCreate";

const NoteTreeTable = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCreate = () => {
    setShowPopup(!showPopup);
    // props.handleShowPopup(true)
    props.setShowPopup(true)
  };

  const handleClose = () => {
    setShowPopup(false);
    // props.handleShowPopup(false)
    props.setShowPopup(false)
  };

  const extractNames = (objectArray) => {
    if (!Array.isArray(objectArray)) return [];
    let names = [];
    for (let obj of objectArray) {
      names.push({ name: obj.name, id: obj.id });
    }
    return names;
  };
  const names = extractNames(props.object);

  const handleSelect = (id) => {
    props.onSelectedItem(id);
  };

  return (
    <>
      <div className={ns.noteTreeCategory}>
        <h3>{props.header}</h3>
        <button className={ns.greenButton} onClick={handleCreate}>
          Create
        </button>
        {showPopup && (
         <div className={ns.popupContainer}>
         <div className={ns.popup}>
           <div className={ns.popupHeader}>
             <h2>Create NPC</h2>
             <button className={ns.closeButton} onClick={handleClose}>X</button>
           </div>
           <NpcCreate />
         </div>
       </div>
        )}
        {names.map((obj, index) => (
          <div
            className={ns.noteTreeCategoryItem}
            key={index}
            onClick={() => handleSelect(obj.id)}
          >
            {obj.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteTreeTable;
