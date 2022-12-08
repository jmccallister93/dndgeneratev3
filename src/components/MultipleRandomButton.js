import style from "../stylesheets/PageStyle.module.scss";

const MultipleRandomButton = (props) => {
  const onRandomClick = (e) => {
    let max = props.valueOptions.length;
    let r = Math.round(Math.random() * (max - 0));
    props.setSelectedItem((oldArray)=> [...oldArray,props.valueOptions[r].name]);
    props.setList(props.selectedItem)
  };
  return (
    <button className={style.btnName} onClick={onRandomClick}>
      Random
    </button>
  );
};

export default MultipleRandomButton;
