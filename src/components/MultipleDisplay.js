import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const MultipleDisplay = (props) => {
  //---PROPS NEEDED---
  //selectedItem
  //---PROPS NEEDED---
  const [multipleDisplay, setMultipleDisplay] = useState([]);
  const [display, setDisplay] = useState();

  useEffect(() => {
    if (props.selectedItem === undefined) {
    } else {
      setMultipleDisplay(props.selectedItem);
    }
  }, [props.selectedItem]);

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

  useEffect(() => {
      setDisplay(
        multipleDisplay.map((i, index) => {
          const isLastElement = index === multipleDisplay.length - 1;
          return (
            <span
              className="editText"
              onClick={onClick}
              contentEditable="false"
              suppressContentEditableWarning={true}
            >
              <span className={style.minorText3}>
              {i === undefined ? null : `${i.name}${isLastElement ? "" : ", "}`}
                </span>
            </span>
          );
        })
      );
  }, [multipleDisplay]);

  return <>{display}</>;
};

export default MultipleDisplay;
