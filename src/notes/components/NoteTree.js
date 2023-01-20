import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { DataTable } from "primereact/datatable";
import TreeTable from "./TreeTable";

const NoteTree = (props) => {
  const [list, setList] = useState([]);
  const test = [
    { name: "Ting", data: "test" },
    { name: "Ting2", data: "test2" },
  ];

  const data = test.map((item) => ({ name: item.name, data: item.data }));

  return (
    <>
      <div className={ns.noteTree}>
        <div className={ns.TreeTable}>
          {" "}
          <TreeTable
            header="Locations"
            value={data}
            onSelectedItem={(value) => props.onSelectedItem(value)}
          />
        </div>
        <div className={ns.TreeTable}>
          <TreeTable header="Organizations" />
        </div>
        <div className={ns.TreeTable}>
          <TreeTable header="NPCs" />
        </div>
        <div className={ns.TreeTable}>
          <TreeTable header="Quests" />
        </div>
        <div className={ns.TreeTable}>
          <TreeTable header="Items" />
        </div>
      </div>
    </>
  );
};

export default NoteTree;
