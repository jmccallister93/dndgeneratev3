import React, { useState } from "react";
import { supabase,  } from "../../config/supabaseClient"; // import the supabase client

function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await supabase.from("notes").insert({ title, content }); // insert a new row into the notes table
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NewNote;
