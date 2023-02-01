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
  const [selectedNode, setSelectedNode] = useState({});

  const test = [
    {
      key: "loc0",
      data: {
        name: "Main Location 1",
        additionalData: "value",
        links: ["loc0-0", "loc0-1"],
      },
      children: [
        {
          key: "loc0-0",
          data: {
            name: "Side Location 1",
            additionalData: "value",
            links: ["loc0", "org0-0"]
          },
        },
        {
          key: "loc0-1",
          data: {
            name: "Side Location 2",
            additionalData: "value",
            links: ["loc0", "org0-1"]
          },
          children: [
            {
              key: "loc0-1-0",
              data: {
                name: "Small Location 1",
                additionalData: "value",
                links: ["loc0", "org0-1"]
              },
            },
            {
              key: "loc0-1-1",
              data: {
                name: "Small Location 2",
                additionalData: "value",
                links: []
              },
            },
          ],
        },
      ],
    },
    {
      key: "loc1",
      data: {
        name: "Main Location 2",
        additionalData: "value",
        links: ["loc1-0", "loc1-1"]
      },
    },
    {
        key: "loc2",
        data: {
            name: "Main Location 3",
            additionalData: "value",
            links: ["loc1"]
        },
        children: [
            {
                key: "loc2-0",
                data: {
                    name: "Side Location 3",
                    additionalData: "value",
                    links: ["loc2"]
                },
            },
        ],
    },
  ];

  useEffect(() => {
    setSelectedNode(
      test.find((node) => node.key === selectedKey) || {}
    );
  }, [selectedKey]);

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Campaign Notes</h1>
      </div>
      <div className={ns.flex1}>
        <NoteTree 
        test={test}
        onSelectedItem={setSelectedKey} 
        />
        <Note
          // name={selectedKey.name}
          // data={selectedKey.data}
          // links={selectedKey.links}
          selectedNode={selectedNode}
        />
      </div>
    </div>
  );
}

export default NotePage;
