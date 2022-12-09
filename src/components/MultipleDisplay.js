import { i } from "mathjs";
import { useEffect, useState } from "react";

const MultipleDisplay = (props) => {
  //---PROPS NEEDED---
  //selectedItem
  //---PROPS NEEDED---
  const [multipleDisplay, setMultipleDisplay] = useState([]);
  const [list, setList] = useState();

  useEffect(() => {
    if (props.selectedItem === undefined) {
    } else if (props.selectedItem.length >= 0) {
      setMultipleDisplay(props.selectedItem);

      setList(multipleDisplay.map((i) => i.name));
    }
  }, [props.selectedItem]);

  // useEffect(() => {
  //   props.setList(multipleDisplay.map((i)=> i.name))
  // }, [props.selectedItem])

  const display = multipleDisplay.map((i) => {
    return <span>{`${i.name}, `}</span>;
  });

  return <>{display}</>;
};

export default MultipleDisplay;
