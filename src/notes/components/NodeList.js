import { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";
import style from "../../stylesheets/PageStyle.module.scss";

const NodeList = (props) => {
  const [allLinks, setAllLinks] = useState(
    props.selectedNode.links.split(",").map((link) => link.trim())
  ).filter(Boolean);

  //Hanlde linking the nodes by node name
  const handleLinkNode = (nodeName, nodeUuid) => {
    if (props.selectedNode.links.includes(nodeName)) {
      return;
    }
    setAllLinks((prevLinks) => [...prevLinks, nodeName]);
  };

  useEffect(() => {
    props.updateProperty(
      "links",
      allLinks.filter((link) => link !== null).join(", ")
    );
    props.setAllLinks(allLinks);
  }, [allLinks, props.updateProperty]);

  useEffect(() => {
    console.log("allLinks", allLinks);
  }, [allLinks, props]);

  //Add the selected node's links to the all links state
  // useEffect(() => {
  //   props.updateProperty(
  //     "links",
  //     allLinks.filter((link) => link !== null).join(", ")
  //   );
  // }, [allLinks, props]);

  return (
    <>
      <div className={ns.popupHeader}>
        <h3>Current Links: {props.selectedNode.links}</h3>
      </div>
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
    </>
  );
};

export default NodeList;
