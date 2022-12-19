import style from "../stylesheets/PageStyle.module.scss";

const ClearButton = (props) => {
  //PROPS
  //setStringState
  //setArrayState

  //Clear
  const onClear = (e) => {
    for (let i = 0; props.setStringState.length > i; i++) {
      props.setStringState[i]("");
    }
    if (props.setArrayState) {
      for (let i = 0; props.setArrayState.length > i; i++) {
        props.setArrayState[i]([]);
      }
    }
  };

  return (
    <>
      <button
        onClick={onClear}
        className={style.btnClear}
        title="Clear All Fields"
      >
        Clear
      </button>
    </>
  );
};

export default ClearButton;
