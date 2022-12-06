const MultipleDisplay = (props) => {
    const multipleDisplay = props.selected.map((i) => {
        return <span>{`${i.name},`}</span>;
      });
    return ( <>{multipleDisplay}</> );
}
 
export default MultipleDisplay;