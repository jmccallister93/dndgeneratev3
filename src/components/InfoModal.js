import { Dialog } from "primereact/dialog";
import { useState } from "react";

const InfoModal = (props) => {
    //Set visible to true to display the modal

    //Set visible to false to hide the modal
    return (
        <div>
            <Dialog
                header={props.header}
                visible={props.visible}
                style={{ width: "50vw" }}
                modal={true}
                // onHide={() => props.setVisible(false)}
            >
                {props.content}
            </Dialog>
        </div>
    );
}
 
export default InfoModal;