import { useEffect, useState } from "react";

const MultipleDisplay = (props) => {
  //---PROPS NEEDED---
  //selectedItem
  //---PROPS NEEDED---
  // const multipleDisplay = []

  const multipleDisplay = props.list.map((i) => {
    return <span>{`${i}, `}</span>;
  });
  // const multipleDisplay = props.list

  return <>{multipleDisplay}</>;
};

export default MultipleDisplay;
