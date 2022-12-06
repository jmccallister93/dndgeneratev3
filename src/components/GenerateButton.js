const GenerateButton = (props) => {
    const onGenerate = (e) => {
        for (let i =0; i < props.generateItems.length; i++){
            let max = props.generateItems[i].length
            if(props.generateItems[i] === ""){
                let r = Math.round(Math.random() * (max - 0))
                props.setItem(props.itemOptions[r])
            }
        }
    }
return (<>{onGenerate}</>);
}
 
export default GenerateButton;