const MultipleDisplay = (props) => {
    //---PROPS NEEDED---
    //selectedItem
    //---PROPS NEEDED---
    const multipleDisplay = props.selectedItem.map((i) => {
        return <span>{`${i.name},`}</span>;
      });
    return ( <>{multipleDisplay}</> );
}
 
export default MultipleDisplay;