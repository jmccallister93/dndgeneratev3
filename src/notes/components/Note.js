import React, { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";

function Note(props) {
  const [notes, setNotes] = useState("");

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const updateNote = (notes) => {
    props.updateNotes(notes)
  };

  return (
    <>
      <div className={ns.display}>
        {props.selectedNode !== undefined ? (
          <>
            <h2>{props.selectedNode.name}</h2>
            {Object.keys(props.selectedNode).map((prop) => {
              if (prop !== "id" && prop !== "name" && prop !== "selectedItem") {
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
            <textarea
              value={notes}
              onChange={handleNotesChange}
            ></textarea>
            <button onClick={() => props.updateNote(notes)}>Save Notes</button>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Note;
