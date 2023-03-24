import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import ns from "../../stylesheets/Note.module.scss";
import NodeList from "./NodeList";

function Note(props) {
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1);
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(-1);
  const [showNodesList, setShowNodesList] = useState(false);

  //Handles the change in the notes
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  //Adds the notes to the array
  const handleAddNotes = () => {
    const newNotesArray = notes
      .split("\n")
      .filter((note) => note.trim() !== "");
    setAllNotes([...allNotes, ...newNotesArray]);
    setSelectedNoteIndex(allNotes.length);
    props.updateNote([...allNotes, ...newNotesArray].join("\n"));
    setNotes("");
    setSelectedNoteIndex(-1);
  };

  //Passed the updated node to the parent component
  const updateProperty = async (property, value) => {
    try {
      const updatedNode = { ...props.selectedNode, [property]: value };
      await props.updateSelectedNode(updatedNode); // call the function
      props.setPropertyValue(value);
    } catch (error) {
      console.error("Error updating note:" + error);
    }
  };

  //Handles the enter key
  const handleEnterDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.tagName === "TEXTAREA") {
        event.preventDefault();
        handleAddNotes();
      } else if (event.target.tagName === "INPUT") {
        event.preventDefault();
        updateProperty();
        setSelectedPropertyIndex(-1);
      } else {
        setSelectedNoteIndex(-1);
        setAllNotes(
          allNotes.map((note, index) =>
            index === selectedNoteIndex ? event.target.value : note
          )
        );
        props.updateNote(allNotes.join("\n"));
      }
    }
  };

  //Handles the delete of a note
  const handleDeleteNote = (index) => {
    const newNotes = [...allNotes];
    newNotes.splice(index, 1);
    setAllNotes(newNotes);
    props.updateNote(newNotes.join("\n"));
  };

  //Handles the edit of a note
  useEffect(() => {
    if (props.selectedNode && props.selectedNode.notes) {
      setAllNotes(props.selectedNode.notes.split("\n"));
    } else {
      setAllNotes([]);
    }
  }, [props.selectedNode]);

  //Handles the linking of a selected node
  const handleLink = () => {
    setShowNodesList(!showNodesList);
  };

  //Handle the close button
  const handleCloseLink = () => {
    setShowNodesList(false);
    props.setShowNodesList(false);
  };

  return (
    <>
      {props.selectedNode !== undefined ? (
        <div className={ns.display}>
          <h2 className={ns.noteTitle}>
            {props.selectedNode.name}
            <button className={ns.contextButton} onClick={handleLink}>
              <i className="pi pi-link"></i>
            </button>
            {showNodesList && (
              <div className={ns.popupContainer}>
                <div className={ns.popup}>
                  <div className={ns.popupHeader}>
                    <h2>Create Link for {props.selectedNode.name}</h2>
                    <button
                      className={ns.closeButton}
                      onClick={handleCloseLink}
                    >
                      X
                    </button>
                  </div>
                  <div className={ns.popupHeader}>
                    <h3>Current Links: {props.selectedNode.links}</h3>
                  </div>
                  <NodeList
                    location={props.location}
                    npc={props.npc}
                    organization={props.organization}
                    quest={props.quest}
                    item={props.item}
                    updateProperty={updateProperty}
                    setPropertyValue={props.setPropertyValue}
                    selectedNode={props.selectedNode}
                    updateSelectedNode={props.updateSelectedNode}
                  />
                </div>
              </div>
            )}
          </h2>
          {Object.keys(props.selectedNode).map((prop, index) => {
            if (
              prop !== "uuid" &&
              prop !== "selectedItem" &&
              prop !== "notes"
            ) {
              return (
                <div key={index}>
                  {prop.charAt(0).toUpperCase() + prop.slice(1)}:{" "}
                  {selectedPropertyIndex === index ? (
                    <input
                      className={ns.editNote}
                      type="text"
                      value={props.selectedNode[prop]}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        props.setSelectedNode((prev) => ({
                          ...prev,
                          [prop]: newValue,
                        }));
                      }}
                      onBlur={() => {
                        setSelectedPropertyIndex(-1);
                        updateProperty(prop, props.selectedNode[prop]);
                      }}
                      onKeyDown={handleEnterDown}
                      autoFocus
                    />
                  ) : (
                    <span
                      className={ns.objectProperty}
                      onClick={() => {
                        setSelectedPropertyIndex(index);
                      }}
                    >
                      {props.selectedNode[prop]}
                    </span>
                  )}
                </div>
              );
            }
            return null;
          })}
          <h2>Notes</h2>
          {props.selectedNode && Object.keys(props.selectedNode).length ? (
            <ul>
              {allNotes.map((note, index) => (
                <li key={index}>
                  {selectedNoteIndex === index ? (
                    <input
                      className={ns.editNote}
                      type="text"
                      value={note}
                      onChange={(e) => {
                        const newNotes = [...allNotes];
                        newNotes[index] = e.target.value;
                        setAllNotes(newNotes);
                      }}
                      onBlur={() => {
                        setSelectedNoteIndex(-1);
                        props.updateNote(allNotes.join("\n"));
                      }}
                      onKeyDown={handleEnterDown}
                      autoFocus
                    />
                  ) : (
                    <>
                      <span>- {note} </span>
                      <button
                        className={ns.editButton}
                        onClick={() => setSelectedNoteIndex(index)}
                        title="Edit"
                      >
                        <i class="pi pi-pencil"></i>
                      </button>
                      <button
                        className={ns.deleteButton}
                        onClick={() => handleDeleteNote(index)}
                        title="Delete"
                      >
                        <i class="pi pi-trash"></i>
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
          <div className={ns.notesWrapper}>
            <textarea
              className={ns.notesTextArea}
              placeholder="Add notes here..."
              value={notes}
              onChange={handleNotesChange}
              onKeyDown={handleEnterDown}
            ></textarea>
            <button class={ns.saveButton} onClick={handleAddNotes}>
              Add Notes
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Note;
