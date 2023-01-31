import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { DataTable } from "primereact/datatable";
import TreeTable from "./NoteTreeTable";
import NoteTreeTable from "./NoteTreeTable";


const NoteTree = (props) => {
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
            object={test}
            objectKey={test.key}
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
