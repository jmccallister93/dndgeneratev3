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
    if (props.selectedValue) {
      console.log("hi");
      props.setSelectedValue([]);
      let n = Math.round(Math.random() * (6 - 0));
      for (let i = 0; i <= n; i++) {
        let max = props.selectedValueOptions.length - 1;
        let r = Math.round(Math.random() * (max - 0));
        if (props.selectedValue.includes(props.selectedValueOptions[r])) {
        } else {
          props.setSelectedValue((oldArray) => [
            ...oldArray,
            props.valueOptions[r],
          ]);
        }
      }
    }
    <MultipleRandomButton
    valueOptions={props.valueOptions}
    setSelectedItem={props.setSelectedItem}
    list={props.list}
    selectedItem={props.selectedItem}
    setList={props.setList}
  />
  };

  const onRandomClick = (e) => {
    onRandomClickSingle()
    onRandomClickMultiple()
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
