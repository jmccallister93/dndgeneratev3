import { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";
import style from "../../stylesheets/PageStyle.module.scss";

const NodeList = (props) => {
  const [links, setLinks] = useState("");
  const [allLinks, setAllLinks] = useState([]);
  const [linkedNode, setLinkedNode] = useState("");

  //   const handleLinkNode = async (nodeName) => {
  //     try {
  //       setLinks([props.selectedNode.links]);
  //       setAllLinks([...allLinks, nodeName]);
  //       const newLinksArray = allLinks.join(", ");
  //       const updatedNode = { ...props.selectedNode, links: newLinksArray };
  //       await props.updateSelectedNode(updatedNode);
  //       props.setPropertyValue(nodeName);
  //     } catch (error) {
  //       console.error("Error updating note:" + error);
  //     }
  //   };

  useEffect(() => {
    setAllLinks([props.selectedNode.links]);
  }, [props.selectedNode.links])

  const handleLinkNode = (nodeName) => {
    setAllLinks([...allLinks, nodeName]);
    const newLinksArray = allLinks.join(", ");
    props.updateSelectedNode({ ...props.selectedNode, links: newLinksArray });
    props.setPropertyValue(newLinksArray);
    console.log(newLinksArray);
  };

;

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
          <div key={node.id}>{node.name}</div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h2>Organizations:</h2>
        {props.organization.map((node) => (
          <div key={node.id}>{node.name}</div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h2>Quests:</h2>
        {props.quest.map((node) => (
          <div key={node.id}>{node.name}</div>
        ))}
      </div>
      <div className={ns.nodeList}>
        <h2>Items:</h2>
        {props.item.map((node) => (
          <div key={node.id}>{node.name}</div>
        ))}
      </div>
    </div>
  );
};

export default NodeList;
