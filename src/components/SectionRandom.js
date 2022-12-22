import style from "../stylesheets/PageStyle.module.scss";
import MultipleRandomButton from "./MultipleRandomButton";
const SectionRandom = (props) => {
  //---PROPS---
  //options
  //value
  //setValue
  const onRandomClickSingle = (e) => {
    for (let i = 0; i < props.value.length; i++) {
      let max = props.valueOptions[i].length - 1;
      let r = Math.round(Math.random() * (max - 0));
      props.setValue[i](props.valueOptions[i][r].name);
    }
  };
  const onRandomClickMultiple = (e) => {
    // props.selectedValueOptions;
    // props.setSelectedValue;
    // props.selectedValueList;
    // props.selectedValue;
    // props.setSelectedValueList;
    if (props.selectedValue) {
        for (let i = 0; i < props.selectedValue.length; i++) {
          if (props.selectedValue[i].length <= 0) {
            let n = Math.floor(Math.random() * (6 - 0));
            for (let x = 0; x <= n; x++) {
              let r = Math.round(
                Math.random() * props.selectedValueOptions[i].length
              );
              if (props.selectedValue[i].length <= 0) {
                props.setSelectedValue[i]((oldArray) => [
                  ...oldArray,
                  props.selectedValueOptions[i][r],
                ]);
              }
            }
          }
        }
      }
  };

  const onRandomClick = (e) => {
    onRandomClickSingle();
    onRandomClickMultiple();
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
