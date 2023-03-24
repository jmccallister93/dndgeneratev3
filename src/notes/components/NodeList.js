import { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";
import style from "../../stylesheets/PageStyle.module.scss";

const NodeList = (props) => {
  const [links, setLinks] = useState("");
  const [allLinks, setAllLinks] = useState([]);

  const handleLinkNode = (nodeUuid, nodeName) => {
    setLinks(nodeName);
    setAllLinks([...allLinks, nodeName]);
    props.updateProperty("links", allLinks);
  };

  return (
    <div className={ns.nodeListWrapper}>
      <div className={ns.nodeList}>
        <h1>Locations:</h1>
        {props.location.map((node) => (
          <div
            className={ns.linkItem}
            key={node.uuid}
            onClick={() => handleLinkNode(node.uuid, node.name)}
          >
            {node.name}
          </div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h1>NPCs:</h1>
        {props.npc.map((node) => (
          <div key={node.id}>{node.name}</div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h1>Organizations:</h1>
        {props.organization.map((node) => (
          <div key={node.id}>{node.name}</div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h1>Quests:</h1>
        {props.quest.map((node) => (
          <div key={node.id}>{node.name}</div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h1>Items:</h1>
        {props.item.map((node) => (
          <div key={node.id}>{node.name}</div>
        ))}
      </div>
    </div>
  );
};

export default NodeList;
