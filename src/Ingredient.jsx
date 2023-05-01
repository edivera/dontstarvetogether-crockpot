import React, {useEffect, useState} from "react";
import imgFrame from "./images/ingredients/frame.png";

const frameStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(${imgFrame})`
}

export function Ingredient(props) {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        console.log(`${props.name}: ${hovered}`)
    }, [hovered]);

    return (
        <div className={props.className} style={frameStyle}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <img src={require(`./images/ingredients/${props.name}.png`)} alt={props.name} />
        </div>
    )
}

export default Ingredient;