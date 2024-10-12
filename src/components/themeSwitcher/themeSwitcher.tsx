import { useState } from "react";
import "./themeSwitcher.css"

import { colors } from "../../styles/constants"


const labelStyle = {
    cursor: "pointer",
    display: "inline-block",
    width: "100%",
    height: "100%",
    backgroundColor: colors.shade,
    borderRadius: "30px",
}

const iconStyle = {
    margin: "10px 10px",
}

export function ThemeSwitcher() {
    const iconLight: string = "../../../../icons/icon_light.svg";
    const iconDark: string = "../../../../icons/icon_dark.svg";

    const [isToggled, setIsToggled] = useState(false);
    const [icon, setIcon] = useState(iconLight)

    const handleToggle = () => {
        setIsToggled(!isToggled);
        if (icon === iconLight) setIcon(iconDark)
        else setIcon(iconLight);
    };

    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                checked={isToggled}
                onChange={handleToggle}
                id="toggle"
                className="toggle-input"
            />
            <label htmlFor="toggle" className="toggle-label" style={labelStyle}>
                <span className="toggle-button">
                    <img src={icon} style={iconStyle}/>
                </span>
            </label>
        </div>
    );
}