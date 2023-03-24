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
import ContextMenu from "./ContextMenu";
import userEvent from "@testing-library/user-event";
import NodeList from "./NodeList";

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
  const [showNodesList, setShowNodesList] = useState(false);

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

  useEffect(() => {}, [props.location]);

  //Extract the names and uuids from the props
  const extractNames = (objectArray) => {
    if (!Array.isArray(objectArray)) return [];
    let names = [];
    for (let obj of objectArray) {
      names.push({ name: obj.name, uuid: obj.uuid });
    }
    return names;
  };

  // const location = extractNames(props.location);
  const npc = extractNames(props.npc);
  const organization = extractNames(props.organization);
  const quest = extractNames(props.quest);
  const item = extractNames(props.item);

  const extractNames2 = (objectArray) => {
    if (!Array.isArray(objectArray)) return {};
    let namesByFolder = {};
    for (let obj of objectArray) {
      const folder = obj.folder;
      if (!namesByFolder[folder]) {
        namesByFolder[folder] = [];
      }
      namesByFolder[folder].push({ name: obj.name, uuid: obj.uuid });
    }
    return namesByFolder;
  };
  const location = extractNames2(props.location);

  const [visibleFolders, setVisibleFolders] = useState({});

  const toggleFolderVisibility = (folder) => {
    setVisibleFolders((prevState) => ({
      ...prevState,
      [folder]: !prevState[folder],
    }));
  };

  // useEffect(() => {
  //   console.log(location)
  // }, [location])

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

  //Handle context menu button
  const handleContextMenuButton = (e, index) => {
    setClickedIndex(index);
    setContextMenuVisible(true);
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    clickedMenuItem.current = false;
    if (contextMenuVisible) {
      setContextMenuVisible(false);
    }
  };

  //Handles the linking of a selected node
  const handleLink = () => {
    setShowNodesList(!showNodesList);
  };

  //Handle the close button
  const handleCloseLink = () => {
    setShowNodesList(false);
    props.setShowNodesList(false);
  };

  // useEffect(() => {
  //   console.log(props.npc)
  // }, [props.npc]) 

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
        {/* Locations */}
        {Object.entries(location).map(([folder, objects], folderIndex) => (
          <div key={folderIndex}>
            <div
              className={`${ns.noteTreeFolder} ${
                visibleFolders[folder] ? ns.selectedFolder : ""
              }`}
            >
              <h3>
                {folder === "null" ? "No Folder" : folder}
                <button
                  className={ns.folderButton}
                  onClick={() => toggleFolderVisibility(folder)}
                >
                  <i
                    className={`pi ${
                      visibleFolders[folder] ? "pi-folder-open" : "pi-folder"
                    }`}
                  ></i>{" "}
                  <i
                    className={`pi ${
                      visibleFolders[folder]
                        ? "pi-angle-double-down"
                        : "pi-angle-double-right"
                    }`}
                  ></i>
                </button>
              </h3>
            </div>
            {visibleFolders[folder] &&
              Array.isArray(objects) &&
              objects.map((obj, index) => (
                <div
                  className={`${ns.noteTreeCategoryItem} ${
                    props.selectedId === obj.uuid ? ns.selected : ""
                  }`}
                  key={index}
                  onClick={() => handleSelect(obj.uuid, obj.name)}
                >
                  {obj.name}
                  {/* <button className={ns.contextButton} onClick={handleLink}>
                    <i className="pi pi-link"></i>
                  </button>
                  {showNodesList && (
                    <div className={ns.popupContainer}>
                      <div className={ns.popup}>
                        <div className={ns.popupHeader}>
                          <h2>Create Link</h2>
                          <button
                            className={ns.closeButton}
                            onClick={handleCloseLink}
                          >
                            X
                          </button>
                        </div> 
                        <NodeList
                          location={props.location}
                          npc={props.npc}
                          organization={props.organization}
                          quest={props.quest}
                          item={props.item}
                        />
                      </div>
                    </div>
                  )} */}
                </div>
              ))}
             
          </div>
        ))}
        {/* NPCs */}
        {npc.map((obj, index) => (
          <div
            className={`${ns.noteTreeCategoryItem} ${
              props.selectedId === obj.uuid ? ns.selected : ""
            }`}
            key={obj.uuid}
            onClick={() => handleSelect(obj.uuid, obj.name)}
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
          >
            {obj.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteTreeTable;
