import React, { useEffect, useState } from 'react';
import supabase from '../../config/supabaseClient'; // import the supabase client

function NoteList() {
  // const [notes, setNotes] = useState([]);
  //   const [fetchError, setFetchError] = useState(null);

  //   //Get Data from supabase
  //   useEffect(() => {
  //       const fetchData = async () => {
  //           const { body, error: errorName } = await supabase
  //           .from("notes")
  //           .select();
  //           console.log(body)
  //         if (errorName) {
  //           setFetchError("Could not fetch the data");
  //           console.log(errorName);
  //           setNotes(null);
  //         }
  //         if (body) {
  //           setFetchError(null);
  //           setNotes(body);
  //         }
  //       };
  //       fetchData();
  //     }, []);

  // return (
  //   <div>
  //     {notes ? notes.map((note) => (
  //       <div key={note.id}>
  //         <h3>{note.title}</h3>
  //         <p>{note.content}</p>
  //       </div>
  //     )): null}
  //   </div>
  // );
}

export default NoteList;
