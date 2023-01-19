import { useState, useEffect } from "react";
import ns from "../../stylesheets/Note.module.scss";

const NoteTree = (props) => {
  const [isLocationActive, setIsLocationActive] = useState(false);
  const [isNpcActive, setIsNpcActive] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);
  const [isQuestActive, setIsQuestActive] = useState(false);
  const [isOrganizationActive, setIsOrganizationActive] = useState(false);

  const onLocationClick = () => {
    setIsLocationActive(!isLocationActive);
  };
  const onNpcClick = () => {
    setIsNpcActive(!isNpcActive);
  };
  const onItemClick = () => {
    setIsItemActive(!isItemActive);
  };
  const onQuestClick = () => {
    setIsQuestActive(!isQuestActive);
  };
  const onOrganizationClick = () => {
    setIsOrganizationActive(!isOrganizationActive);
  };

  return (
    <>
      <div className={ns.noteTree}>
        <div className={ns.noteTreeCategory}>
          <h1>Locactions</h1>
            <ul>
                <li>City</li>
                <li>Country</li>
                <li>Continent</li>
                <li>World</li>
            </ul>
        </div>
        <div className={ns.noteTreeCategory}>
          <h1>NPCs</h1>
          <ul>
                <li>Bob</li>
                <li>Joe</li>
                <li>Bill</li>
                <li>John</li>
          </ul>
        </div>
        <div className={ns.noteTreeCategory}>
          <h1>Items</h1>
        </div>
        <div className={ns.noteTreeCategory}>
          <h1>Organizations</h1>
        </div>
        <div className={ns.noteTreeCategory}>
          <h1>Quests</h1>
        </div>
      </div>
    </>
  );
};

export default NoteTree;
