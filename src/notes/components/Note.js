import React from 'react';

function Note(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </>
  );
}

export default Note;
