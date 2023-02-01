import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { DataTable } from "primereact/datatable";
import TreeTable from "./NoteTreeTable";
import NoteTreeTable from "./NoteTreeTable";


const NoteTree = (props) => {

const test2 =[
    {
      key: "o0",
      data: {
        name: "Parent Node 1",
        additionalData: "value",
      },
      children: [
        {
          key: "o0-0",
          data: {
            name: "Child Node 1",
            additionalData: "value",
          },
        },
        {
          key: "o0-1",
          data: {
            name: "Child Node 2",
            additionalData: "value",
          },
          children: [
            {
              key: "o0-1-0",
              data: {
                name: "Grandchild Node 1",
                additionalData: "value",
              },
            },
            {
              key: "o0-1-1",
              data: {
                name: "Grandchild Node 2",
                additionalData: "value",
              },
            },
          ],
        },
      ],
    },
    {
      key: "o1",
      data: {
        name: "Parent Node 2",
        additionalData: "value",
      },
    },
  ];

  return (
    <>
      <div className={ns.noteTree}>
        <div className={ns.TreeTable}> 
          {" "}
          <NoteTreeTable
            header="Locations"
            object={props.test}
            objectKey={props.test.key}
            onSelectedItem={(value) => props.onSelectedItem(value)}
          />
        </div>
        <div className={ns.TreeTable}>
          {/* <NoteTreeTable
            header="Organizations"
            value={test2}
            onSelectedItem={(value) => props.onSelectedItem(value)}
          /> */}
        </div>
        <div className={ns.TreeTable}>
          {/* <NoteTreeTable header="NPCs" /> */}
        </div>
        <div className={ns.TreeTable}>
          {/* <NoteTreeTable header="Quests" /> */}
        </div>
        <div className={ns.TreeTable}>
          {/* <NoteTreeTable header="Items" /> */}
        </div>
      </div>
    </>
  );
};

export default NoteTree;
