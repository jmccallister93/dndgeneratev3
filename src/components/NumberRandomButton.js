import style from "../stylesheets/PageStyle.module.scss";

const NumberRandomButton = (props) => {
  //---PROPS---
  //setSingluar
  //---PROPS---

  const onRandomClick = (e) => {
    let r = Math.floor(Math.random() * (2000 - 0));
    props.setSingular(r);
  };
  return (
    <button className={style.btnName} onClick={onRandomClick}>
      Random
    </button>
  );
};

export default NumberRandomButton;
