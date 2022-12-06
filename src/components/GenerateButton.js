import style from "../stylesheets/PageStyle.module.scss";
const GenerateButton = (props) => {
  //----PROPS NEEDED----
  //generateItems
  //setItem
  //itemOptions
  //---PROPS NEEDED----
  const onGenerate = (e) => {
    for (let i = 0; i < props.generateItems.length; i++) {
      let max = props.generateItems[i].length;
      if (props.generateItems[i] === "") {
        let r = Math.round(Math.random() * (max - 0));
        props.setItem(props.itemOptions[r]);
      }
    }
  };
  return (
    <>
      <button onClick={onGenerate} className={style.btnGen}>
        Generate
      </button>
    </>
  );
};

export default GenerateButton;
