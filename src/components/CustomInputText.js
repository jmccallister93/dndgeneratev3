import { InputText } from "primereact/inputtext";
import style from "../stylesheets/PageStyle.module.scss";


const CustomInputText = (props) => {
    // ----SAMPLE PROPS----
    //title
    //input
    //setInput
    //onchange
    //placeholder
    //onclick
    // ----SAMPLE PROPS----
    
    const onInputChange = (e) => {
        props.setInput(e.target.value);
      }
      // eslint-disable-next-line 
    const onRandom = (e) => {
        if(props.input === ""){
            let r = Math.round(Math.random() * (1-0))
            props.setInput(r)
        }
    }
    const customInputText = (
        <div>
          <h2 className={style.titles}>{props.title}</h2>
          <InputText value={props.input} onChange={onInputChange} placeholder={props.placeholder} />
          <button onClick={props.onRandom} className={style.btnName}>
            Random
          </button>
        </div>
      );

     
    return ( <>{customInputText}</> );
}
 
export default CustomInputText;