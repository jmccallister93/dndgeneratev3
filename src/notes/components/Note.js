import React, { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";

function Note(props) {
  //HANDLE IMAGE UPLOAD
  // const [image, setImage] = useState(null);

  // const handleFileSelect = (event) => {
  //   setImage(event.target.files[0]);
  // };

  // function handleDrop(e) {
  //   e.preventDefault();
  //   var file = e.dataTransfer.files[0];
  //   setImage(file);
  // }

  // function handleDragOver(e) {
  //   e.preventDefault();
  // }


  return (
    <>
      <div
        className={ns.display}
        // onDrop={handleDrop}
        // onDragOver={handleDragOver}
      >
        <h3>{props.name}</h3>
        <p>{props.data}</p>
        <p>{props.links}</p>
        {/* <input type="file" onChange={handleFileSelect} />
        <img src={image} alt="Uploaded Image" /> */}
        {props.name !== undefined ? (
          <>
          <button>Link</button>
          <button>Generate</button>
          </>
        ) : (
          null
        )}
            
      </div>
    </>
  );
}

export default Note;
