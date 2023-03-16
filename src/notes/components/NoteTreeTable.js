import { useEffect, useState, useRef } from "react";
import NpcGen from "../../pages/NpcGen";
import ns from "../../stylesheets/Note.module.scss";
import ItemCreate from "./ItemCreate";
import LocationCreate from "./LocationCreate";
import NpcCreate from "./NpcCreate";
import OrganizationCreate from "./OrganizationCreate";
import QuestCreate from "./QuestCreate";
import supabase from "../../config/supabaseClient";
import DeleteConfirmation from "./DeleteConfirmation";
import { useCallback } from "react";

const NoteTreeTable = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const contextMenuRef = useRef(null);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const clickedMenuItem = useRef(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  //Handle the create new button
  const handleCreate = () => {
    setShowPopup(!showPopup);
    props.setShowPopup(true);
  };

  //Handle the close button
  const handleClose = () => {
    setShowPopup(false);
    props.setShowPopup(false);
  };

  //Extract the names and uuids from the props
  const extractNames = (objectArray) => {
    if (!Array.isArray(objectArray)) return [];
    let names = [];
    for (let obj of objectArray) {
      names.push({ name: obj.name, uuid: obj.uuid });
    }
    return names;
  };
  const npc = extractNames(props.npc);
  const location = extractNames(props.location);
  const organization = extractNames(props.organization);
  const quest = extractNames(props.quest);
  const item = extractNames(props.item);

  //Handle the selection of a node
  const handleSelect = (uuid, name) => {
    props.setSelectedId(uuid);
    props.setSelectedName(name);
  };

  //Handle the delete confirmation
  const handleDeleteConfirmation = () => {
    setShowDeleteConfirmation(!showDeleteConfirmation);
  };

  //Handle the delete button
  const handleDelete = () => {
    handleDeleteConfirmation();
  };

  //Handle the confirmed delete and delete the node
  const handleConfirmedDelete = () => {
    props.deleteSelectedNode();
    setShowDeleteConfirmation(false);
  };

  //Handle the click outside the context menu
  const hideContextMenu = useCallback(() => {
    setContextMenuVisible(false);
  }, []);

  // Handle the click on the location item
// const handleLocationItemClick = useCallback((index) => {
//   setClickedIndex(index);
//   handleSelect(location[index].uuid, location[index].name);
// }, [location, handleSelect]);

  // Handle the context menu
  const handleContextMenu = useCallback((e, index) => {
    e.preventDefault();
    setClickedIndex(index);
    setContextMenuVisible(true);
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    clickedMenuItem.current = false;
  }, []);

  // Handle the click on the context menu item
  const handleMenuItemClick = useCallback(
    (e) => {
      // console.log("You clicked menu item", e.target.textContent);
      clickedMenuItem.current = true;
      hideContextMenu();
    },
    [hideContextMenu]
  );

  //Handle the click outside the context menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(e.target)
      ) {
        hideContextMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [contextMenuRef, hideContextMenu]);

  useEffect(() => {
    console.log(contextMenuPosition.x, contextMenuPosition.y);
  }, [contextMenuPosition]);

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
        {showDeleteConfirmation && (
          <DeleteConfirmation
            node={props.selectedName}
            handleDeleteConfirmation={handleDeleteConfirmation}
            deleteSelectedNode={handleConfirmedDelete}
          />
        )}
        {showPopup && props.header === "NPCs" && (
          <div className={ns.popupContainer}>
            <div className={ns.popup}>
              <div className={ns.popupHeader}>
                <h2>Create NPC</h2>
                <button className={ns.closeButton} onClick={handleClose}>
                  X
                </button>
              </div>
              <NpcCreate />
            </div>
          </div>
        )}
        {showPopup && props.header === "Locations" && (
          <div className={ns.popupContainer}>
            <div className={ns.popup}>
              <div className={ns.popupHeader}>
                <h2>Create Location</h2>
                <button className={ns.closeButton} onClick={handleClose}>
                  X
                </button>
              </div>
              <LocationCreate />
            </div>
          </div>
        )}
        {showPopup && props.header === "Organizations" && (
          <div className={ns.popupContainer}>
            <div className={ns.popup}>
              <div className={ns.popupHeader}>
                <h2>Create Organizations</h2>
                <button className={ns.closeButton} onClick={handleClose}>
                  X
                </button>
              </div>
              <OrganizationCreate />
            </div>
          </div>
        )}
        {showPopup && props.header === "Quests" && (
          <div className={ns.popupContainer}>
            <div className={ns.popup}>
              <div className={ns.popupHeader}>
                <h2>Create Quests</h2>
                <button className={ns.closeButton} onClick={handleClose}>
                  X
                </button>
              </div>
              <QuestCreate />
            </div>
          </div>
        )}
        {showPopup && props.header === "Items" && (
          <div className={ns.popupContainer}>
            <div className={ns.popup}>
              <div className={ns.popupHeader}>
                <h2>Create Items</h2>
                <button className={ns.closeButton} onClick={handleClose}>
                  X
                </button>
              </div>
              <ItemCreate />
            </div>
          </div>
        )}
        {location.map((obj, index) => (
          <div
            className={`${ns.noteTreeCategoryItem} ${
              props.selectedId === obj.uuid ? ns.selected : ""
            }`}
            key={index}
            onClick={() => handleSelect(obj.uuid, obj.name)}
            onContextMenu={(e) => handleContextMenu(e, index)}
          >
            {obj.name}
            {clickedIndex === index && contextMenuVisible && (
              <div
                ref={contextMenuRef}
                style={{
                  borderRadius: "0.5rem",
                  left: contextMenuPosition.x,
                  top: contextMenuPosition.y,
                  backgroundColor: "white",
                  color: "black",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                  padding: "0",
                  margin: "0.5rem",
                  zIndex: 1,
                }}
                className={ns.contextMenu}
                onClick={handleMenuItemClick}
              >
                <div className={ns.menuItem}>
                  {" "}
                  <i class="pi pi-plus"></i> Add Child
                </div>
                <div className={ns.menuItem}>
                  <i class="pi pi-link"></i> Link
                </div>
                <div className={ns.menuItem}>
                  <i class="pi pi-angle-double-up"></i> Move Up
                </div>
                <div className={ns.menuItem}>
                  <i class="pi pi-angle-double-down"></i> Move Down
                </div>
              </div>
            )}
          </div>
        ))}
        {npc.map((obj, index) => (
          <div
            className={`${ns.noteTreeCategoryItem} ${
              props.selectedId === obj.uuid ? ns.selected : ""
            }`}
            key={obj.uuid}
            onClick={() => handleSelect(obj.uuid, obj.name)}
            onContextMenu={handleContextMenu}
          >
            {obj.name}
          </div>
        ))}
        {organization.map((obj, index) => (
          <div
            className={`${ns.noteTreeCategoryItem} ${
              props.selectedId === obj.uuid ? ns.selected : ""
            }`}
            key={index}
            onClick={() => handleSelect(obj.uuid, obj.name)}
            onContextMenu={handleContextMenu}
          >
            {obj.name}
          </div>
        ))}
        {quest.map((obj, index) => (
          <div
            className={`${ns.noteTreeCategoryItem} ${
              props.selectedId === obj.uuid ? ns.selected : ""
            }`}
            key={index}
            onClick={() => handleSelect(obj.uuid, obj.name)}
            onContextMenu={handleContextMenu}
          >
            {obj.name}
          </div>
        ))}
        {item.map((obj, index) => (
          <div
            className={`${ns.noteTreeCategoryItem} ${
              props.selectedId === obj.uuid ? ns.selected : ""
            }`}
            key={index}
            onClick={() => handleSelect(obj.uuid, obj.name)}
            onContextMenu={handleContextMenu}
          >
            {obj.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteTreeTable;
