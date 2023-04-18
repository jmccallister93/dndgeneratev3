import { useEffect, useState, useRef } from "react";
import React from "react";
import NpcGen from "../../pages/NpcGen";
import ns from "../../stylesheets/Note.module.scss";
import ItemCreate from "./ItemCreate";
import LocationCreate from "./LocationCreate";
import NpcCreate from "./NpcCreate";
import OrganizationCreate from "./OrganizationCreate";
import QuestCreate from "./QuestCreate";
import DeleteConfirmation from "./DeleteConfirmation";
import { useCallback } from "react";
import ContextMenu from "./ContextMenu";
import userEvent from "@testing-library/user-event";
import NodeList from "./NodeList";
import MonsterCreate from "./MonsterCreate";

const NoteTreeTable = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [activeLinks, setActiveLinks] = useState([]);

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

  const extractNames = (objectArray) => {
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
  const location = extractNames(props.location);
  const npc = extractNames(props.npc);
  const organization = extractNames(props.organization);
  const quest = extractNames(props.quest);
  const item = extractNames(props.item);
  const monster = extractNames(props.monster);

  // Show folders
  const [visibleFolders, setVisibleFolders] = useState({});

  const toggleFolderVisibility = (folder) => {
    setVisibleFolders((prevState) => ({
      ...prevState,
      [folder]: !prevState[folder],
    }));
  };

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

  //Update Links
  useEffect(() => {
    if (props.selectedNode && props.selectedNode.links) {
      const linkedNames = props.selectedNode.links;
      const namesArray = linkedNames
        .split(", ")
        .filter((name) => name.trim() !== "");
      setActiveLinks(namesArray);
    } else {
      setActiveLinks([]);
    }
  }, [props]);

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
        {showPopup && props.header === "Monsters" && (
          <div className={ns.popupContainer}>
            <div className={ns.popup}>
              <div className={ns.popupHeader}>
                <h2>Create Monster</h2>
                <button className={ns.closeButton} onClick={handleClose}>
                  X
                </button>
              </div>
              <MonsterCreate />
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
        {Object.entries(location).map(([folder, objects], folderIndex) => {
          const hasActiveLink = objects.some((obj) =>
            activeLinks.includes(obj.name)
          );
          return (
            <div key={folderIndex}>
              <div
                className={`${ns.noteTreeFolder} ${
                  visibleFolders[folder] ? ns.selectedFolder : ""
                } ${hasActiveLink ? ns.activeLink : ""}`}
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
                    } ${activeLinks.includes(obj.name) ? ns.activeLink : ""}`}
                    key={index}
                    onClick={() => handleSelect(obj.uuid, obj.name)}
                  >
                    {obj.name}
                  </div>
                ))}
            </div>
          );
        })}

        {/* NPCs */}
        {Object.entries(npc).map(([folder, objects], folderIndex) => {
          const hasActiveLink = objects.some((obj) =>
            activeLinks.includes(obj.name)
          );
          return (
            <div key={folderIndex}>
              <div
                className={`${ns.noteTreeFolder} ${
                  visibleFolders[folder] ? ns.selectedFolder : ""
                } ${hasActiveLink ? ns.activeLink : ""}`}
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
                    } ${activeLinks.includes(obj.name) ? ns.activeLink : ""}`}
                    key={index}
                    onClick={() => handleSelect(obj.uuid, obj.name)}
                  >
                    {obj.name}
                  </div>
                ))}
            </div>
          );
        })}

        {/* Organization */}
        {Object.entries(organization).map(([folder, objects], folderIndex) => {
          const hasActiveLink = objects.some((obj) =>
            activeLinks.includes(obj.name)
          );
          return (
            <div key={folderIndex}>
              <div
                className={`${ns.noteTreeFolder} ${
                  visibleFolders[folder] ? ns.selectedFolder : ""
                } ${hasActiveLink ? ns.activeLink : ""}`}
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
                    } ${activeLinks.includes(obj.name) ? ns.activeLink : ""}`}
                    key={index}
                    onClick={() => handleSelect(obj.uuid, obj.name)}
                  >
                    {obj.name}
                  </div>
                ))}
            </div>
          );
        })}

        {/* Monster */}
        {Object.entries(monster).map(([folder, objects], folderIndex) => {
          const hasActiveLink = objects.some((obj) =>
            activeLinks.includes(obj.name)
          );
          return (
            <div key={folderIndex}>
              <div
                className={`${ns.noteTreeFolder} ${
                  visibleFolders[folder] ? ns.selectedFolder : ""
                } ${hasActiveLink ? ns.activeLink : ""}`}
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
                    } ${activeLinks.includes(obj.name) ? ns.activeLink : ""}`}
                    key={index}
                    onClick={() => handleSelect(obj.uuid, obj.name)}
                  >
                    {obj.name}
                  </div>
                ))}
            </div>
          );
        })}

        {/* Quest */}
        {Object.entries(quest).map(([folder, objects], folderIndex) => {
          const hasActiveLink = objects.some((obj) =>
            activeLinks.includes(obj.name)
          );
          return (
            <div key={folderIndex}>
              <div
                className={`${ns.noteTreeFolder} ${
                  visibleFolders[folder] ? ns.selectedFolder : ""
                } ${hasActiveLink ? ns.activeLink : ""}`}
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
                    } ${activeLinks.includes(obj.name) ? ns.activeLink : ""}`}
                    key={index}
                    onClick={() => handleSelect(obj.uuid, obj.name)}
                  >
                    {obj.name}
                  </div>
                ))}
            </div>
          );
        })}

        {/* Item */}
        {Object.entries(item).map(([folder, objects], folderIndex) => {
          const hasActiveLink = objects.some((obj) =>
            activeLinks.includes(obj.name)
          );
          return (
            <div key={folderIndex}>
              <div
                className={`${ns.noteTreeFolder} ${
                  visibleFolders[folder] ? ns.selectedFolder : ""
                } ${hasActiveLink ? ns.activeLink : ""}`}
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
                    } ${activeLinks.includes(obj.name) ? ns.activeLink : ""}`}
                    key={index}
                    onClick={() => handleSelect(obj.uuid, obj.name)}
                  >
                    {obj.name}
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(NoteTreeTable);
