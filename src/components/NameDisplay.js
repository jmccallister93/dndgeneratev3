import style from "../stylesheets/PageStyle.module.scss";

const NameDisplay = (props) => {
  //Create onclick function that allows text editing and sets state to new value. When user clicks out of the text box, set state to new value If user clicks out of text box and it is empty, set state to "" (empty string)
  const onClick = (e) => {
    e.target.contentEditable = true;
    e.target.focus();
    e.target.onblur = () => {
      e.target.contentEditable = false;
      if (e.target.innerText === "") {
        props.setNewValue("");
      } else {
        props.setNewValue(e.target.innerText);
      }
    };
    //Add a listener for the enter key
    e.target.onkeypress = (e) => {
      if (e.key === "Enter") {
        e.target.blur();
      }
    };
  };
  return (
    <h1
      className="editText"
      onClick={onClick}
      contentEditable="false"
      suppressContentEditableWarning={true}
    >
      <span className={style.nameText}>{props.value}</span>
    </h1>
  );
};

export default NameDisplay;
