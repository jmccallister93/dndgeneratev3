import style from "../stylesheets/BuildingGen.module.scss";

const ClearButton = (props) => {
  //Clear
  const onClear = (e) => {
    for (let i = 0; props.amountOfStates > i; i++) {
        props.setStringState[i]("");
      }
    // props.setStringState("");
    props.setArrayState([]);
  };

  
  return (
    <>
      <button onClick={onClear} className={style.btnClear}>
        Clear
      </button>
    </>
  );
};

export default ClearButton;
