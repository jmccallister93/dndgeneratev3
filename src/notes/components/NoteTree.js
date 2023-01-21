import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { DataTable } from "primereact/datatable";
import TreeTable from "./TreeTable";
import NoteTreeTable from "./TreeTable";

const NoteTree = (props) => {
  const test = [
    {
      key: "0",
      data: {
        name: "Parent Node 1",
        additionalData: "value",
      },
      children: [
        {
          key: "0-0",
          data: {
            name: "Child Node 1",
            additionalData: "value",
          },
        },
        {
          key: "0-1",
          data: {
            name: "Child Node 2",
            additionalData: "value",
          },
          children: [
            {
              key: "0-1-0",
              data: {
                name: "Grandchild Node 1",
                additionalData: "value",
              },
            },
            {
              key: "0-1-1",
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
      key: "1",
      data: {
        name: "Parent Node 2",
        additionalData: "value",
      },
    },
  ];
const test2 =[
    {
      key: "0",
      data: {
        name: "Parent Node 1",
        additionalData: "value",
      },
      children: [
        {
          key: "0-0",
          data: {
            name: "Child Node 1",
            additionalData: "value",
          },
        },
        {
          key: "0-1",
          data: {
            name: "Child Node 2",
            additionalData: "value",
          },
          children: [
            {
              key: "0-1-0",
              data: {
                name: "Grandchild Node 1",
                additionalData: "value",
              },
            },
            {
              key: "0-1-1",
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
      key: "1",
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
            value={test}
            onSelectedItem={(value) => props.onSelectedItem(value)}
          />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable
            header="Organizations"
            value={test2}
            onSelectedItem={(value) => props.onSelectedItem(value)}
          />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable header="NPCs" />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable header="Quests" />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable header="Items" />
        </div>
      </div>
    </>
  );
};

export default NoteTree;
