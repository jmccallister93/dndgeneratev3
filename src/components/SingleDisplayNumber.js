import style from "../stylesheets/PageStyle.module.scss";

const SingleDisplayNumber = (props) => {
  //Create on click function that allows for number change and sets state to new number value
  

  const onClick = (e) => {
    e.target.contentEditable = true;
    e.target.focus();

    //Add a listener for the enter key
    e.target.onkeypress = (e) => {
      if (e.key === "Enter") {
        e.target.blur();
      }
    };

    //If e.target.innerText is not equal to "0" through "30" then set e.target.innerText to "0" apply this after the onblur function
    e.target.onblur = () => {
      if (e.target.innerText === "") {
        props.setNewValue("0");
      } else if (
        e.target.innerText !== "0" &&
        e.target.innerText !== "1" &&
        e.target.innerText !== "2" &&
        e.target.innerText !== "3" &&
        e.target.innerText !== "4" &&
        e.target.innerText !== "5" &&
        e.target.innerText !== "6" &&
        e.target.innerText !== "7" &&
        e.target.innerText !== "8" &&
        e.target.innerText !== "9" &&
        e.target.innerText !== "10" &&
        e.target.innerText !== "11" &&
        e.target.innerText !== "12" &&
        e.target.innerText !== "13" &&
        e.target.innerText !== "14" &&
        e.target.innerText !== "15" &&
        e.target.innerText !== "16" &&
        e.target.innerText !== "17" &&
        e.target.innerText !== "18" &&
        e.target.innerText !== "19" &&
        e.target.innerText !== "20" &&
        e.target.innerText !== "21" &&
        e.target.innerText !== "22" &&
        e.target.innerText !== "23" &&
        e.target.innerText !== "24" &&
        e.target.innerText !== "25" &&
        e.target.innerText !== "26" &&
        e.target.innerText !== "27" &&
        e.target.innerText !== "28" &&
        e.target.innerText !== "29" &&
        e.target.innerText !== "30"
      ) {
        e.target.innerText = "0";
        props.setNewValue(e.target.innerText)
      } else {
        props.setNewValue(e.target.innerText);
      }
    };
  };

  return (
    <span
      className={style.minorText2}
      onClick={onClick}
      contentEditable="false"
      suppressContentEditableWarning={true}
    >
      {props.value}
    </span>
  );
};

export default SingleDisplayNumber;
