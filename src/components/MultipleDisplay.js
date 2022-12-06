import { useEffect, useState } from "react";

const MultipleDisplay = (props) => {
    //---PROPS NEEDED---
    //selectedItem
    //---PROPS NEEDED---
    const multipleDisplay = []

    if(props.selectedItem === undefined){

    }else{
      multipleDisplay = props.selectedItem.map((i) => {
        return <span>{`${i.name},`}</span>;
      });
    }
    
      
    return ( <>{multipleDisplay}</> );
}
 
export default MultipleDisplay;