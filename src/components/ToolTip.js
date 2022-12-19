const ToolTip = (props) => {
    //Create a ToolTip component that activates when the user hovers over a button
    return (
      <div className="toolTip">
        <p className="toolTipText">{props.text}</p>
      </div>
    );
}
 
export default ToolTip;