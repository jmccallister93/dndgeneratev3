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
    };
    return (
        <h1
            className="editText"
            onClick={onClick}
            contentEditable="false"
            suppressContentEditableWarning={true}
        >
            {props.value}
        </h1>
    );
}
 
export default NameDisplay;