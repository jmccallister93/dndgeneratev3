import style from "../stylesheets/PageStyle.module.scss"
const RandomButton = (props) => {
  const onRandomClick= (e) => {
    let max = props.options.length;
    let r = Math.round(Math.random() * (max - 0));
    props.setValue(props.options[r].name);
  };
  
  return (
    <>
      <button className={style.btnName} onClick={onRandomClick}>
        Random
      </button>
    </>
  );
};

export default RandomButton;
