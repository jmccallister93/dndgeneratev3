import style from "../stylesheets/PageStyle.module.scss";

const NumberRandomButton = (props) => {
  //---PROPS---
  //setSingluar
  //maxNumber
  //---PROPS---

  const onRandomClick = (e) => {
    console.log(props.maxNumber)
    let r = Math.floor(Math.random() * (props.maxNumber - 0));
    props.setSingular(r);
  };
  return (
    <button className={style.btnName} onClick={onRandomClick}>
      Random
    </button>
  );
};

export default NumberRandomButton;
