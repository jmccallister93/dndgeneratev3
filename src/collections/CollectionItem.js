import { Dialog } from "primereact/dialog";
import { useEffect } from "react";
import { useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const CollectionItem = (props) => {
  return (
    <Dialog
      className={style.infoModal}
      header={"Details"}
      visible={props.visible}
      modal={true}
      onHide={() => props.setVisible(false)}
      style={{ width: "50vw" }}
    >
      {Object.entries(props.selectedItem).map(([key, value]) => {
        if (
          key !== "uuid" &&
          key !== "selectedItem" &&
          key !== "notes" &&
          key !== "links"
        ) {
          return (
            <>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
              {value}
              <br />
            </>
          );
        }
        return null;
      })}
    </Dialog>
  );
};

export default CollectionItem;
