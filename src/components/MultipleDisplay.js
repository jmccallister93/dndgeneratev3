import { useEffect, useState } from "react";

const MultipleDisplay = (props) => {
  //---PROPS NEEDED---
  //selectedItem
  //---PROPS NEEDED---
  const [multipleDisplay, setMultipleDisplay] = useState([])

  useEffect(()=>{
    if(props.selectedItem === undefined ){
    } else if(props.selectedItem.length >= 0){ 
      setMultipleDisplay(props.selectedItem)
    }
  },[props.selectedItem])
  
  const display = multipleDisplay.map((i) => {
    return <span>{`${i.name}, `}</span>;
  });

  return <>{display}</>;
};

export default MultipleDisplay;
