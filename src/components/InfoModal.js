import { Dialog } from "primereact/dialog";
import style from "../stylesheets/PageStyle.module.scss";

const InfoModal = (props) => {
  return (
    <div>
      <Dialog
        className={style.infoModal}
        header={props.header}
        visible={props.visible}
        modal={true}
        onHide={() => props.setVisible(true)}
        style={{ width: "50vw"}}
      >
        {props.content}
      </Dialog>
    </div>
  );
};

export default InfoModal;
