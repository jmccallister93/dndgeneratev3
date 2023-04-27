import style from "../stylesheets/PageStyle.module.scss";


const ConstrainedMultRandom = (props) => {

  const onRandomClick = (e) => {
    props.setSelectedItem([])
    let n = Math.round(Math.random() * (props.constrainedValue - 0));
    for (let i = 0; i <= n; i++) {
      let max = props.valueOptions.length -1;
      let r = Math.round(Math.random() * (max - 0));
      if (props.selectedItem.includes(props.valueOptions[r])) {
      } else {
        props.setSelectedItem((oldArray) => [
          ...oldArray,
          props.valueOptions[r],
        ]);
      }
    }
  };

  return (
    <>
      <button className={style.btnName} onClick={onRandomClick}>
        Random
      </button>
    </>
  );
};
export default ConstrainedMultRandom;