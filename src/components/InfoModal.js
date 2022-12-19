import { Dialog } from "primereact/dialog";
import { useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const InfoModal = (props) => {
  //Set visible to true to display the modal

  //Set visible to false to hide the modal
  return (
    <div>
      <Dialog
        className={style.infoModal}
        header={props.header}
        visible={props.visible}
        modal={true}
        onHide={() => props.setVisible(true)}
        //Inline style to set rounded corners and width 50vw and background color to blue
        style={{ width: "50vw"}}
      >
        {props.content}
      </Dialog>
    </div>
  );
};

export default InfoModal;
