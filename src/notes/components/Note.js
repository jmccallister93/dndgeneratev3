import React from 'react';
import ns from "../../stylesheets/Note.module.scss";

function Note(props) {
  return (
    <>
    <div className={ns.display}>
      <h3>{props.name}</h3>
      <p>{props.data}</p>
      </div>
    </>
  );
}

export default Note;
