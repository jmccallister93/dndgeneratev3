import { useEffect, useState } from "react";
import ns from "../../stylesheets/Note.module.scss";
import style from "../../stylesheets/PageStyle.module.scss";

const NodeList = (props) => {
  const [allLinks, setAllLinks] = useState(props.allLinks);
  const [testNode, setTestNode] = useState("");

  //Hanlde linking the nodes by node name
  const handleLinkNode = (nodeName, nodeUuid) => {
    if (
      props.selectedNode.links &&
      props.selectedNode.links.includes(nodeName)
    ) {
      return;
    } else {
      setAllLinks((prevLinks) => [...prevLinks, nodeName]);
    }
    // props.setIdToLink(nodeUuid);
    // setTestNode(props.selectedNode.name);
  };

  //Update the links property of the selected node
  useEffect(() => {
    props.updateProperty(
      "links",
      allLinks.length === 0
        ? props.selectedNode.links
        : allLinks.filter((link) => link !== null).join(", ")
    );
    props.setAllLinks(allLinks);
  }, [allLinks, props]);


//ISSUES with THIS

  //Update the links property of the second node
  // useEffect(() => {
  //   if (testNode !== "") {
  //     props.updateLinkedProperty("links", testNode);
  //   }
  // }, [props, testNode]);

  return (
    <>
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
