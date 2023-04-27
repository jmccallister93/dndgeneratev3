import { useState } from "react";
import NpcCreate from "./NpcCreate";
import ns from "../../stylesheets/Note.module.scss";
import PantheonCreate from "./PantheonCreate";
import VillainCreate from "./VillainCreate";

const NpcOptions = (props) => {
  const [showPopupNpc, setShowPopupNpc] = useState(false);
  const [showPopupVillain, setShowPopupVillain] = useState(false);
  const [showPopupPantheon, setShowPopupPantheon] = useState(false);

  const handleCreateNpc = () => {
    setShowPopupNpc(!showPopupNpc);
    setShowPopupPantheon(false);
    setShowPopupVillain(false);
    // props.setShowPopup(true);
  };

  const handleCreateVillain = () => {
    setShowPopupVillain(!showPopupVillain);
    setShowPopupNpc(false);
    setShowPopupPantheon(false);
    // props.setShowPopupVillain(true);
  };

  const handleCreatePantheon = () => {
    setShowPopupPantheon(!showPopupPantheon);
    setShowPopupNpc(false);
    setShowPopupVillain(false);
    // props.setShowPopupPantheon(true);
  };


  const buttonOptions = (
    <>
      <div className={ns.flex1}>
        <button onClick={handleCreateNpc} className={ns.greenButton}>
          Create NPC
        </button>
        <button onClick={handleCreateVillain} className={ns.greenButton}>
          Create Villain
        </button>
        <button onClick={handleCreatePantheon} className={ns.greenButton}>
          Create Pantheon
        </button>
      </div>
    </>
  );

  return (
    <>
      {buttonOptions}
      {showPopupNpc && <NpcCreate />};{showPopupVillain && <VillainCreate />};
      {showPopupPantheon && <PantheonCreate />};
    </>
  );
};

export default NpcOptions;
