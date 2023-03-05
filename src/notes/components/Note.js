import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import ns from "../../stylesheets/Note.module.scss";

function Note(props) {
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1);
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(-1);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

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

  const updateProperty = async (property, value) => {
    try {
      const updatedNode = { ...props.selectedNode, [property]: value };
      await props.updateSelectedNode(updatedNode); // call the function
      props.setPropertyValue(value);
    } catch (error) {
      console.error("Error updating note:" + error);
    }
  };

  const handleEnterDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.tagName === "TEXTAREA") {
        event.preventDefault();
        handleAddNotes();
      } else if(event.target.tagName === "INPUT"){
        event.preventDefault();
        updateProperty();
        setSelectedPropertyIndex(-1);
      }else {
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

  const handleDeleteNote = (index) => {
    const newNotes = [...allNotes];
    newNotes.splice(index, 1);
    setAllNotes(newNotes);
    props.updateNote(newNotes.join("\n"));
  };

  useEffect(() => {
    if (props.selectedNode && props.selectedNode.notes) {
      setAllNotes(props.selectedNode.notes.split("\n"));
    } else {
      setAllNotes([]);
    }
  }, [props.selectedNode]);

  // useEffect(() => {
  //   console.log(props.selectedNode);
  // }, [selectedPropertyIndex]);

  return (
    <>
      <div className={ns.display}>
        {props.selectedNode !== undefined ? (
          <>
            <h2>{props.selectedNode.name}</h2>
            {Object.keys(props.selectedNode).map((prop, index) => {
              if (
                prop !== "id" &&
                prop !== "name" &&
                prop !== "selectedItem" &&
                prop !== "notes" &&
                prop !== "db"
              ) {
                return (
                  <div key={index}>
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
                      <p
                        className={ns.objectProperty}
                        onClick={() => {
                          setSelectedPropertyIndex(index);
                        }}
                      >
                        {prop.charAt(0).toUpperCase() + prop.slice(1)}:{" "}
                        {props.selectedNode[prop]}
                      </p>
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
          </>
        ) : null}
      </div>
    </>
  );
}

export default Note;
