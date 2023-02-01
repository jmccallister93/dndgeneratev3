import React, { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";

function Note(props) {
useEffect(() => {
    console.log(props.selectedNode);
  }, [props.selectedNode]);
  return (
    <>
      <div className={ns.display}>
        {props.selectedNode !== undefined ? (
          <>
            <h3>{props.selectedNode.name}</h3>
          
            <button>Link</button>
            <button>Generate</button>
          </>
         ) : null} 
      </div>
    </>
  );
}

export default Note;
