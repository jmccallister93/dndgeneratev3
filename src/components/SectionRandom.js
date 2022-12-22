import style from "../stylesheets/PageStyle.module.scss";
const SectionRandom = (props) => {
  //---PROPS---
  //options
  //value
  //setValue
  const onRandomClick = (e) => {
    for (let i = 0; i < props.value.length; i++) {
      let max = props.valueOptions[i].length - 1;
      let r = Math.round(Math.random() * (max - 0));
      props.setValue[i](props.valueOptions[i][r].name);
    }
  };

  return (
    <>
      <button
        className={style.btnName}
        onClick={onRandomClick}
        title="Generate Random Value"
      >
        Random
      </button>
    </>
  );
};

export default SectionRandom;
