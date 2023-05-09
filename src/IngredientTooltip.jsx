import React, {useEffect, useState} from 'react';
import MouseTooltip from "react-sticky-mouse-tooltip";

function IngredientTooltip(props) {
    const [isVisible, setVisible] = useState()

    useEffect(() => {
        setVisible(props.hovered)
    }, [props.hovered])

    return (
        <MouseTooltip className={props.className}
            visible={isVisible}
            offsetX={15}
            offsetY={10}
        >
            <span className="food-name">{props.name}</span>
        </MouseTooltip>
    )
}

export default IngredientTooltip;