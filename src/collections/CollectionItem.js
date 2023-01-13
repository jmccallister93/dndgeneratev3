import { Dialog } from "primereact/dialog";
import { useEffect } from "react";
import { useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const CollectionItem = (props) => {
  const entries = props.selectedItem.map((entry) => {
    const key = entry[0].charAt(0).toUpperCase() + entry[0].slice(1);
    return `${key}: ${entry[1]}`;
  });

  return (
    <Dialog
      className={style.infoModal}
      header={"NPC Info"}
      visible={props.visible}
      modal={true}
      onHide={() => props.setVisible(false)}
      style={{ width: "50vw" }}
    >
      {props.selectedItem.map(([key, value]) => (
        <>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          <br />
        </>
      ))}
    </Dialog>
  );
};

export default CollectionItem;
