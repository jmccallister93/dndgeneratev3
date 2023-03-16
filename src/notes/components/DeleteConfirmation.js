import ns from "../../stylesheets/Note.module.scss";

const DeleteConfirmation = (props) => {
  const handleConfirmedDelete = () => {
    props.deleteSelectedNode();
  };

  return (
    <div className={ns.popupContainerDelete}>
      <div className={ns.popupDelete}>
        <div className={ns.popupHeader}>
          <h2>Are you sure you want to delete {props.node}?</h2>
        </div>
        <div className={ns.popupBodyDelete}>
          <button
            className={ns.deleteConRed}
            onClick={handleConfirmedDelete}
          >
            Yes
          </button>
          <button
            className={ns.deleteConGreen}
            onClick={props.handleDeleteConfirmation}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
