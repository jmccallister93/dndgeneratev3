import { useEffect, useState } from "react";

const MultipleDisplay = (props) => {
    //---PROPS NEEDED---
    //selectedItem
    //---PROPS NEEDED---
    // const multipleDisplay = []

    // if(props.selectedItem === undefined){

    // }else{
    const  multipleDisplay = props.itemList.map((i) => {
        return <span>{`${i.name},`}</span>;
      });
    // }
    // const multipleDisplay = (
    //   <span>{`${props.selectedItem},`}</span>
    // );
      
    return ( <>{multipleDisplay}</> );
}
 
export default MultipleDisplay;