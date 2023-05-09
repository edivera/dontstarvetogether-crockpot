import React, {useEffect, useState} from "react";
import imgFrame from "./images/ingredients/frame.png";
import IngredientTooltip from "./IngredientTooltip"

const frameStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(${imgFrame})`,
    zIndex:700
}

const ingredientContainer = {
    display: "inline-block"
}

export function Ingredient(props) {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        console.log(`${props.name}: ${hovered}`)
    }, [hovered]);

    return (
        <div style={ingredientContainer}>
            <div className={props.className} style={frameStyle}
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
            >
                <img src={require(`./images/ingredients/${props.name}.png`)} alt={props.name} id={props.id} onClick={props.onClick}/>
            </div>
            <IngredientTooltip className="ingredient-tooltip" name={props.name} hovered={hovered}/>
        </div>
    )
}

export default Ingredient;