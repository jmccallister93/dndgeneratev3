import style from "../stylesheets/BuildingGen.module.scss";

const ClearButton = (props) => {
  //Clear
  const onClear = (e, i) => {
    props.setStringState[i]("");
    props.setArrayState([]);
  };

  for (let i = 0; props.amountOfStates > i; i++) {
    onClear(i)
  }
  return (
    <>
      <button onClick={onClear} className={style.btnClear}>
        Clear
      </button>
    </>
  );
};

export default ClearButton;
