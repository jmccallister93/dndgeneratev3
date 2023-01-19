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
  const { id } = useParams();
  const [note, setNote] = useState({});
  const [nodes, setNodes] = useState(null);
  const [selectedKey, setSelectedKey] = useState();
  const toast = useRef(null);
  const nodeService = new NodeService();

  // useEffect(() => {
  //   const getNote = async () => {
  //     const { body } = await supabase.from("notes").select("*").where({ id }); // fetch the note with the matching id
  //     setNote(body[0]);
  //   };
  //   getNote();
  // }, [id]);

  // useEffect(() => {
  //   nodeService.getTreeNodes().then((data) => setNodes(data));
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onNodeSelect = (node) => {
    toast.current.show({
      severity: "success",
      summary: "Node Selected",
      detail: node.label,
      life: 3000,
    });
  };

  const onNodeUnselect = (node) => {
    toast.current.show({
      severity: "success",
      summary: "Node Unselected",
      detail: node.label,
      life: 3000,
    });
  };

  useEffect(() => {
   setNodes([
      {
        label: "Documents",
        data: "Documents Folder",
        expandedIcon: "pi pi-folder-open",
        collapsedIcon: "pi pi-folder",
        children: [
          {
            label: "Work",
            data: "Work Folder",
            expandedIcon: "pi pi-folder-open",
            collapsedIcon: "pi pi-folder",
          },
        ],
      },
    ])
  }, []);

  const onSelectedKey = (e) => {
    // setSelectedKey(e.value);
    console.log(e.label)
  };

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Campaign Notes</h1>
      </div>
      <div className={ns.grid3}>
        <NoteTree/>
        <Note title="test" content={selectedKey}/>
      </div>
    </div>
  );
}

export default NotePage;
