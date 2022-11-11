import { useEffect, useState } from "react";
import style from "../stylesheets/BasicCard.module.scss"

const BasicCard = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        const cardContent = [
            {title: "Create", content: "create content"},
            {title: "Explore", content: "explore stuff"},
            {title: "DM Tools", content: "tools and stuff"}
        ]
        
        
        cardContent.map((t) => {
            setTitle([...t.title])
            setContent(t.content)
        } )      
    }, [])

    return ( 
        <div className={style.basicCardWrapper}>
            <h3 className={style.basicCardTitle}>{ title }</h3>
            <p className={style.basicCardContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
            </p>
        </div>
     );
}
 
export default BasicCard;