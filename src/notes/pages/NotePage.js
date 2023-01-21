import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient"; // import the supabase client
import Navbar from "../../components/Navbar";
import style from "../../stylesheets/PageStyle.module.scss";
import ns from "../../stylesheets/Note.module.scss";
import NewNote from "../components/NewNote";
import NoteList from "../components/NoteList";
import Note from "../components/Note";
import { Tree } from "primereact/tree";
import { NodeService } from "../components/NodeService";
import NoteTree from "../components/NoteTree";

function NotePage() {
  const [selectedKey, setSelectedKey] = useState({});

  useEffect(() => {
    console.log(selectedKey);
  }, [selectedKey]);

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Campaign Notes</h1>
      </div>
      <div className={ns.flex1}>
        <NoteTree onSelectedItem={setSelectedKey}/>
        <Note name={selectedKey.name} data={selectedKey.data}/>
      </div>
    </div>
  );
}

export default NotePage;
