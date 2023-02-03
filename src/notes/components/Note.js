import React, { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";

function Note(props) {
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [notesArray, setNotesArray] = useState([]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleAddNotes = () => {
    setAllNotes([...allNotes, notes]);
  };

  useEffect(() => {
    props.updateNote(allNotes);
  }, [allNotes]);

  useEffect(() => {
    console.log(props.selectedNode);
  }, []);

//THIS IS NOT FIRING
  // useEffect(() => {
  //   if (props.selectedNode && props.selectedNode.notes) {
  //     setNotesArray(props.selectedNode.notes.split("\n"))
  //   }
  // }, [props.selectedNode]);
//THIS IS NOT FIRING

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
            <p>{props.selectedNode.notes}</p>
            {/* {props.selectedNode && Object.keys(props.selectedNode).length ? (
              <ul>
                {notesArray.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            ) : null} */}
            <textarea value={notes} onChange={handleNotesChange}></textarea>
            <button onClick={handleAddNotes}>Save Notes</button>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Note;
