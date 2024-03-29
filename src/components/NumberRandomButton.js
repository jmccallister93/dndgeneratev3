import style from "../stylesheets/PageStyle.module.scss";

const NumberRandomButton = (props) => {
  //---PROPS---
  //setSingluar
  //maxNumber
  //---PROPS---

  const onRandomClick = (e) => {
    let r = Math.floor(Math.random() * (props.maxNumber - 0));
    //Convert r to a string
    r = r.toString();
    props.setSingular(r);
    
  };
  return (
    <button
      className={style.diceBtn}
      onClick={onRandomClick}
      title="Generate Random Value"
    >
      <span className={style.diceBtnText}>
      Random
      </span>
    </button>
  );
};

export default NumberRandomButton;
