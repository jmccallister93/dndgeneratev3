import React, { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";

function Note(props) {
  // useEffect(() => {
  //     console.log(props.selectedNode);
  //   }, [props.selectedNode]);
  return (
    <>
      <div className={ns.display}>
        {props.selectedNode !== undefined ? (
          <>
            <h3>{props.selectedNode.name}</h3>
            <p>
              {props.selectedNode.sex} {props.selectedNode.race}
            </p>
            <p>
              Age: {props.selectedNode.age}{" "}
              Height: {props.selectedNode.height}{" "}
              Weight: {props.selectedNode.weight}
            </p>
            <p>{props.selectedNode.align}</p>
            <button>Link</button>
            <button>Generate</button>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Note;
