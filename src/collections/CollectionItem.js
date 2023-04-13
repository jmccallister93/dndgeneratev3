import { Dialog } from "primereact/dialog";
import { useEffect } from "react";
import { useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const CollectionItem = (props) => {
  return (
    <Dialog
      className={style.infoModal}
      header={"Info"}
      visible={props.visible}
      modal={true}
      onHide={() => props.setVisible(false)}
      style={{ width: "50vw" }}
    >
      {props.selectedItem === null
        ? null
        : Object.entries(props.selectedItem).map(([key, value]) => (
            <>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
              {value}
              <br />
            </>
          ))}
    </Dialog>
  );
};

export default CollectionItem;
