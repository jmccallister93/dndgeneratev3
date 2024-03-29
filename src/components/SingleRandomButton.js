import style from "../stylesheets/PageStyle.module.scss";

const SingleRandomButton = (props) => {
  //---PROPS---
  //options
  //setValue
  const onRandomClick = (e) => {
    let max = props.valueOptions.length - 1;
    let r = Math.round(Math.random() * (max - 0));
    props.setSingular(props.valueOptions[r].name);
  };

  return (
    <>
      <button
        className={style.diceBtn}
        onClick={onRandomClick}
        title="Generate Random Value"
      >
        <span className={style.diceBtnText}>Random</span>
      </button>
    </>
  );
};

export default SingleRandomButton;
