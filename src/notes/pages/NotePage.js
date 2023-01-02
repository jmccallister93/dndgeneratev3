import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient"; // import the supabase client
import Navbar from "../../components/Navbar";
import style from "../../stylesheets/PageStyle.module.scss";
import NewNote from "../components/NewNote";
import NoteList from "../components/NoteList";

function NotePage() {
  const { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    const getNote = async () => {
      const { body } = await supabase.from("notes").select("*").where({ id }); // fetch the note with the matching id
      setNote(body[0]);
    };
    getNote();
  }, [id]);

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Campaign Notes</h1>
      </div>
      <NoteList />
      <NewNote />
    </div>
  );
}

export default NotePage;
