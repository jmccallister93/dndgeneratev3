import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { DataTable } from "primereact/datatable";
import TreeTable from "./NoteTreeTable";
import NoteTreeTable from "./NoteTreeTable";
import supabase from "../../config/supabaseClient";

const NoteTree = (props) => {
  return (
    <>
      <div className={ns.noteTree}>
        <div className={ns.TreeTable}>
          {" "}
          <NoteTreeTable
            header="Locations"
            location={props.location}
            setShowPopup={props.setShowPopup}
            selectedNode={props.selectedNode}
            selectedId={props.selectedId}
            selectedName={props.selectedName}
            setSelectedId={(value) => props.setSelectedId(value)}
            setSelectedName={(value) => props.setSelectedName(value)}
            deleteSelectedNode={props.deleteSelectedNode}
          />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable
            header="NPCs"
            npc={props.npc}
            setShowPopup={props.setShowPopup}
            selectedNode={props.selectedNode}
            selectedId={props.selectedId}
            selectedName={props.selectedName}
            setSelectedId={(value) => props.setSelectedId(value)}
            setSelectedName={(value) => props.setSelectedName(value)}
            deleteSelectedNode={props.deleteSelectedNode}
          />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable
            header="Organizations"
            organization={props.organization}
            setShowPopup={props.setShowPopup}
            selectedNode={props.selectedNode}
            selectedId={props.selectedId}
            selectedName={props.selectedName}
            setSelectedId={(value) => props.setSelectedId(value)}
            setSelectedName={(value) => props.setSelectedName(value)}
            deleteSelectedNode={props.deleteSelectedNode}
          />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable
            header="Quests"
            quest={props.quest}
            setShowPopup={props.setShowPopup}
            selectedNode={props.selectedNode}
            selectedId={props.selectedId}
            selectedName={props.selectedName}
            setSelectedId={(value) => props.setSelectedId(value)}
            setSelectedName={(value) => props.setSelectedName(value)}
            deleteSelectedNode={props.deleteSelectedNode}
          />
        </div>
        <div className={ns.TreeTable}>
          <NoteTreeTable
            header="Items"
            item={props.item}
            setShowPopup={props.setShowPopup}
            selectedNode={props.selectedNode}
            selectedId={props.selectedId}
            selectedName={props.selectedName}
            setSelectedId={(value) => props.setSelectedId(value)}
            setSelectedName={(value) => props.setSelectedName(value)}
            deleteSelectedNode={props.deleteSelectedNode}
          />
        </div>
      </div>
    </>
  );
};

export default NoteTree;
