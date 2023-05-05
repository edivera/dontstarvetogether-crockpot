import React, {useEffect, useState} from 'react';
import MouseTooltip from "react-sticky-mouse-tooltip";

function IngredientTooltip(props) {
    const [isVisible, setVisible] = useState()

    useEffect(() => {
        setVisible(props.hovered)
    }, [props.hovered])

    return (
        <MouseTooltip
            visible={isVisible}
            offsetX={15}
            offsetY={10}
        >
            //todo: stylize
            <span>{props.name}</span>
        </MouseTooltip>
    )
}

export default IngredientTooltip;