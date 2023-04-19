import style from "../stylesheets/PageStyle.module.scss";

const SingleDisplayText = (props) => {
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
        }
    }; 
    return (
        <span className={style.minorText2}
            onClick={onClick}
            contentEditable="false"
            suppressContentEditableWarning={true}
        >
            <span className={style.minorText3}>
            {props.value}
            </span>
        </span>
    );
}
 
export default SingleDisplayText;