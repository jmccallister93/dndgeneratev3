const EditText = (props) => {
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
        // Allow the user to press enter to save the new value
        // e.target.addEventListener("keydown", (event) => {
        //     if (event.key === "Enter") {
        //       e.target.blur(); // Trigger the onblur event
        //     }
        //   });
    };
    return (
        <div
            className="editText"
            onClick={onClick}
            contentEditable="false"
            suppressContentEditableWarning={true}
        >
            {props.value}
        </div>
    );
}
 
export default EditText;