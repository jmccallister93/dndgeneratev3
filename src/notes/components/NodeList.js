import { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";
import style from "../../stylesheets/PageStyle.module.scss";

const NodeList = (props) => {
  const [allLinks, setAllLinks] = useState([]);

  //Hanlde linking the nodes by node name
  const handleLinkNode = (nodeName, nodeUuid) => {
    if (props.selectedNode.links.includes(nodeName)) {
        return;
    }
    setAllLinks((prevLinks) => [...prevLinks, nodeName]);
};

  //Update the all links state with the selected node's links
  useEffect(() => {
    setAllLinks([props.selectedNode.links]);
    // console.log(allLinks)
  }, [props.selectedNode]);

  //Add the selected node's links to the all links state
  useEffect(() => {
    let newLinksArray = "";
    if (
      allLinks &&
      allLinks.length > 0 &&
      allLinks.some((link) => link !== null)
    ) {
      newLinksArray = allLinks.filter((link) => link !== null).join(", ");
    } else if (allLinks) {
      newLinksArray = allLinks.join("");
    }
    props.updateSelectedNode({ ...props.selectedNode, links: newLinksArray });
    props.setPropertyValue(newLinksArray);
  }, [
    allLinks,
    props.selectedNode,
    props.setPropertyValue,
    props.updateSelectedNode,
  ]);

  return (
    <div className={ns.nodeListWrapper}>
      <div className={ns.nodeList}>
        <h2>Locations:</h2>
        {props.location.map((node) => (
          <div
            className={ns.linkItem}
            key={node.uuid}
            onClick={() => handleLinkNode(node.name, node.uuid)}
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
            onClick={() => handleLinkNode(node.name, node.uuid)}
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
            onClick={() => handleLinkNode(node.name, node.uuid)}
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
            onClick={() => handleLinkNode(node.name, node.uuid)}
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
            onClick={() => handleLinkNode(node.name, node.uuid)}
          >
            {node.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodeList;
