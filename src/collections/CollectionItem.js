import { Dialog } from "primereact/dialog";
import { useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const CollectionItem = (props) => {
  return (
    <Dialog
    className={style.infoModal}
    header={"NPC Info"}
    visible={props.visible}
    modal={true}
    onHide={() => props.setVisible(false)}
    style={{ width: "50vw"}}
  >
    {props.selectedItem}
  </Dialog>
  );
};

export default CollectionItem;
