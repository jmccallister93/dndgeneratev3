import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import ns from "../../stylesheets/Note.module.scss";

function Note(props) {
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1);

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

  const handleEnterDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.tagName === "TEXTAREA") {
        event.preventDefault(); // prevent adding a new line to the textarea
        handleAddNotes(); // call handleAddNotes function
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

  return (
    <>
      <div className={ns.display}>
        {props.selectedNode !== undefined ? (
          <>
            <h2>{props.selectedNode.name}</h2>
            {Object.keys(props.selectedNode).map((prop) => {
              if (
                prop !== "id" &&
                prop !== "name" &&
                prop !== "selectedItem" &&
                prop !== "notes"
              ) {
                return (
                  <p>
                    {prop.charAt(0).toUpperCase() + prop.slice(1)}:{" "}
                    {props.selectedNode[prop]}
                  </p>
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
                          onClick={() => setSelectedNoteIndex(index)}
                          title="Edit"
                        >
                          <i class="pi pi-pencil"></i>
                        </button>
                        <button
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
            <textarea
              value={notes}
              onChange={handleNotesChange}
              onKeyDown={handleEnterDown}
            ></textarea>
            <button onClick={handleAddNotes}>Save Notes</button>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Note;
