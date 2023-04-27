
import style from "../stylesheets/BasicCard.module.scss"


const BasicCard = (props) => {

    return ( 
        <div className={style.basicCardWrapper}>
            <h3 className={style.basicCardTitle}>{ props.title }</h3>
            <p className={style.basicCardContent}>
            { props.description}
            </p>
            { props.button }
        </div>
     );
}
 
export default BasicCard;