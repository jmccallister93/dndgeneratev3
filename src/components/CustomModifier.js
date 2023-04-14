import { useEffect, useState } from "react";
import CustomInputDecimal from "./CustomInputDecimal";
import CustomInputNumber from "./CustomInputNumber";

const CustomModifier = (props) => {
  const [modifier, setModifier] = useState([]);
  // useEffect(() => {
  //   if (props.value !== undefined) {
  //     for (let i = 0; props.selectedValue.length > i; i++) {
  //       for (let j = 0; props.selectedValue[i].length > j; j++) {
  //         console.log(props.selectedValue[i][j].name);
  //       }
  //     }
  //   }
  // }, [props.value]);

  const number = (
    <CustomInputNumber
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      placeholder={props.placeholder}
      disabled={props.disabled}
      required={props.required}
      min={props.min}
      max={props.max}
    />
  );

  return <>{number}</>;
};

export default CustomModifier;
