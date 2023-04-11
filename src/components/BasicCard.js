import { useEffect, useState } from "react";
import style from "../stylesheets/BasicCard.module.scss"


const BasicCard = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('') 

    // useEffect(() => {
    //     const cardContent = [
    //         {title: "Create", content: "create content"},
    //         {title: "Explore", content: "explore stuff"},
    //         {title: "DM Tools", content: "tools and stuff"}
    //     ]
        
        
    //     cardContent.map((t) => {
    //         setTitle([...t.title])
    //         setContent(t.content)
    //     } )      
    // }, [])


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