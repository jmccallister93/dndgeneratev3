import React, { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";

function Note(props) {
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    if (props.selectedNode && props.selectedNode.notes) {
      setNotes(props.selectedNode.notes);
      setNotes("")
    } else {
      setNotes("");
    }
  }, [props.selectedNode]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

 useEffect(() => {
      console.log()
 }, [notes])

  const handleAddNotes = () => {
    const newNotesArray = notes.split("\n").filter((note) => note.trim() !== "");
    setAllNotes([...allNotes, ...newNotesArray]);
    props.updateNote([...allNotes, ...newNotesArray].join("\n"));
    setNotes("");
  };

  useEffect(() => {
    if (props.selectedNode?.notes) {
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
            {/* <p>{props.selectedNode.notes}</p> */}
            {props.selectedNode && Object.keys(props.selectedNode).length ? (
              <ul>
                {allNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            ) : null}
            <textarea value={notes} onChange={handleNotesChange}></textarea>
            <button onClick={handleAddNotes}>Save Notes</button>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Note;
