import { useEffect, useMemo, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const MultipleDisplay = (props) => {
  const [displayName, setDisplayName] = useState([]);
  const [display, setDisplay] = useState();

  useEffect(() => {
    if (props.selectedItem !== undefined) {
      setDisplayName([...props.selectedItem]);
    }
  }, [props.selectedItem]);

  useEffect(() => {
    setDisplay(
      displayName.map((i, index) => {
        const isLastElement = index === displayName.length - 1;
        return (
          <span
          key={index}
            className="editText"
            contentEditable="false"
            suppressContentEditableWarning={true}
            index={index}
          >
            <span className={style.minorText3} onClick={(e) => onClick(e, index)}>
              {i === undefined ? null : `${i.name}${isLastElement ? "" : ", "}`}
            </span>
          </span>
        );
      })
    );
  }, [displayName, props]);

  const onClick = (e,index) => {
    e.target.contentEditable = true;
    e.target.focus();
    // const index = e.target.dataset.index;
    
    e.target.onblur = () => {
      e.target.contentEditable = false;
      let newDisplayName = [...displayName];
      console.log(index)
      newDisplayName[index] = { ...newDisplayName[index], name: e.target.innerText };
      console.log(newDisplayName)
      setDisplayName(newDisplayName);
  
      props.setNewValue(newDisplayName);
    };
    
    //Add a listener for the enter key
    e.target.onkeypress = (e) => {
      if (e.key === "Enter") {
        e.target.blur();
      }
    };
  };

  // const display = useMemo(
  //   () =>
  //     props.selectedItem.map((i, index) => {
  //       const isLastElement = index === multipleDisplay.length - 1;
  //       return (
  //         <span
  //           key={index}
  //           className="editText"
  //           onClick={onClick}
  //           contentEditable="false"
  //           suppressContentEditableWarning={true}
  //           data-index={index}
  //         >
  //           <span className={style.minorText3}>
  //             {i === undefined ? null : `${i.name}${isLastElement ? "" : ", "}`}
  //           </span>
  //         </span>
  //       );
  //     }),
  //   [multipleDisplay]
  // );

  return <>{display}</>;
};

export default MultipleDisplay;
