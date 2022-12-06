import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";


const CustomInputText = (props) => {
    // ----SAMPLE PROPS----
    //title
    //value
    //onchange
    //placeholder
    //onclick
    // ----SAMPLE PROPS----

    const customInputText = (title, value, change, placeholder, click) => (
        <div>
          <h2 className={style.titles}>{props.title}</h2>
          <InputText value={props.value} onChange={props.onchange} placeholder={props.placeholder} />
          <Button onClick={props.onclick} className={style.btnName}>
            Random
          </Button>
          
        </div>
      );
    return ( <>{customInputText}</> );
}
 
export default CustomInputText;