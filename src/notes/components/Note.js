import React, { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";

function Note(props) {
  console.log(props)

  return (
    <>
      <div className={ns.display}>
        {props.selectedNode !== undefined ? (
          <>
            <h3>{props.selectedNode.data && props.selectedNode.data.name}</h3>
            <div>{props.selectedNode.data && props.selectedNode.data.additionalData}</div>
            <div>{props.selectedNode.data && props.selectedNode.data.links}</div>
            <button>Link</button>
            <button>Generate</button>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Note;
