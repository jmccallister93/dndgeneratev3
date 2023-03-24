import { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";
import style from "../../stylesheets/PageStyle.module.scss";

const NodeList = (props) => {
  const [allLinks, setAllLinks] = useState([]);

  const handleLinkNode = (nodeName) => {
    setAllLinks((prevLinks) => [...prevLinks, nodeName]);
  };

  useEffect(() => {
    const newLinksArray = allLinks.join(", ");
    props.updateSelectedNode({ ...props.selectedNode, links: newLinksArray });
    props.setPropertyValue(newLinksArray);
  }, [allLinks, props.selectedNode, props.setPropertyValue, props.updateSelectedNode]);

  return (
    <div className={ns.nodeListWrapper}>
      <div className={ns.nodeList}>
        <h2>Locations:</h2>
        {props.location.map((node) => (
          <div
            className={ns.linkItem}
            key={node.uuid}
            onClick={() => handleLinkNode(node.name)}
          >
            {node.name}
          </div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h2>NPCs:</h2>
        {props.npc.map((node) => (
          <div
            className={ns.linkItem}
            key={node.uuid}
            onClick={() => handleLinkNode(node.name)}
          >
            {node.name}
          </div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h2>Organizations:</h2>
        {props.organization.map((node) => (
          <div
            className={ns.linkItem}
            key={node.uuid}
            onClick={() => handleLinkNode(node.name)}
          >
            {node.name}
          </div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h2>Quests:</h2>
        {props.quest.map((node) => (
          <div
            className={ns.linkItem}
            key={node.uuid}
            onClick={() => handleLinkNode(node.name)}
          >
            {node.name}
          </div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h2>Items:</h2>
        {props.item.map((node) => (
          <div
            className={ns.linkItem}
            key={node.uuid}
            onClick={() => handleLinkNode(node.name)}
          >
            {node.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodeList;
