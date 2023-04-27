
import ns from "../../stylesheets/Note.module.scss";
import NoteTreeTable from "./NoteTreeTable";


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
            npc={[props.npc, props.pantheon, props.villain]}
            // npc={props.npc}
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
            header="Monsters"
            monster={props.monster}
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
