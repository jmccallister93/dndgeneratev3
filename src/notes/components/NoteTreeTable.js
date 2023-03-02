import { useEffect, useState, useRef } from "react";
import NpcGen from "../../pages/NpcGen";
import ns from "../../stylesheets/Note.module.scss";
import ItemCreate from "./ItemCreate";
import LocationCreate from "./LocationCreate";
import NpcCreate from "./NpcCreate";
import OrganizationCreate from "./OrganizationCreate";
import QuestCreate from "./QuestCreate";

const NoteTreeTable = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCreate = () => {
    setShowPopup(!showPopup);
    props.setShowPopup(true)
  };

  const handleClose = () => {
    setShowPopup(false);
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
  const handleDelete = () => {
    
  };

  return (
    <>
      <div className={ns.noteTreeCategory}>
        <h3>{props.header}</h3>
        <button className={ns.greenButton} onClick={handleCreate}>
          Create
        </button>
        <button className={ns.redButton} onClick={handleDelete}>
          Delete
        </button>
        {showPopup && props.header === "NPCs" && (
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
        {showPopup && props.header === "Locations" && (  <div className={ns.popupContainer}>
          <div className={ns.popup}>
            <div className={ns.popupHeader}>
              <h2>Create Location</h2>
              <button className={ns.closeButton} onClick={handleClose}>X</button>
            </div>
            <LocationCreate />
          </div>
        </div>)
        }
          {showPopup && props.header === "Organizations" && (  <div className={ns.popupContainer}>
          <div className={ns.popup}>
            <div className={ns.popupHeader}>
              <h2>Create Organizations</h2>
              <button className={ns.closeButton} onClick={handleClose}>X</button>
            </div>
            <OrganizationCreate />
          </div>
        </div>)
        }
          {showPopup && props.header === "Quests" && (  <div className={ns.popupContainer}>
          <div className={ns.popup}>
            <div className={ns.popupHeader}>
              <h2>Create Quests</h2>
              <button className={ns.closeButton} onClick={handleClose}>X</button>
            </div>
            <QuestCreate />
          </div>
        </div>)
        }
          {showPopup && props.header === "Items" && (  <div className={ns.popupContainer}>
          <div className={ns.popup}>
            <div className={ns.popupHeader}>
              <h2>Create Items</h2>
              <button className={ns.closeButton} onClick={handleClose}>X</button>
            </div>
            <ItemCreate />
          </div>
        </div>)
        }
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
