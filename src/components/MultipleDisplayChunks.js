import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const MultipleDisplayChunks = (props) => {
  const [multipleDisplay, setMultipleDisplay] = useState([]);
  const [display, setDisplay] = useState();

  useEffect(() => {
    if (props.selectedItem !== undefined) {
      setMultipleDisplay([...props.selectedItem]);
    }
  }, [props.selectedItem]);

  useEffect(() => {
    setDisplay(
      multipleDisplay.map((i, index) => {
        return (
          <div className={style.minorText3Break}>
            <span
              key={index}
              index={index}
              className="editText"
              contentEditable="false"
              suppressContentEditableWarning={true}
            >
              <span
                className={style.minorText3}
                onClick={(e) => onClick(e, index)}
              >
                {i === undefined ? null : `${i.name}`}
              </span>
            </span>
          </div>
        );
      })
    );
    // eslint-disable-next-line 
  }, [multipleDisplay]);

  const onClick = (e, index) => {
    e.target.contentEditable = true;
    e.target.focus();

    e.target.onblur = () => {
      e.target.contentEditable = false;
      let newMultipleDisplay = [...multipleDisplay];
      newMultipleDisplay[index] = {
        ...newMultipleDisplay[index],
        name: e.target.innerText,
      };
      setMultipleDisplay(newMultipleDisplay);

      props.setNewValue(newMultipleDisplay);
    };

    e.target.onkeypress = (e) => {
      if (e.key === "Enter") {
        e.target.blur();
      }
    };
  };

  return <>{display}</>;
};

export default MultipleDisplayChunks;
