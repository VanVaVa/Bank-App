import React from "react";
import { useState } from "react";
import "./themeSwitcher.css"
import styled from "styled-components";

const labelStyle = {
    
}

const iconStyle = {
    margin: "10px 10px",
}

type switcherProps = {
    onSwitch: () => void,
}

export const ThemeSwitcher: React.FC<switcherProps> = ({ onSwitch }) => {
    const iconLight: string = "../../../../icons/icon_light.svg";
    const iconDark: string = "../../../../icons/icon_dark.svg";

    const [isToggled, setIsToggled] = useState(false);
    const [icon, setIcon] = useState(iconLight)

    const handleToggle = () => {
        setIsToggled(!isToggled);
        if (icon === iconLight) {
            setIcon(iconDark)
        } else {
            setIcon(iconLight);
        } 
    };

    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                checked={isToggled}
                onChange={() => {
                    handleToggle()
                    onSwitch()
                }}
                id="toggle"
                className="toggle-input"
            />
            <Label htmlFor="toggle" className="toggle-label" style={labelStyle}>
                <span className="toggle-button">
                    <img src={icon} style={iconStyle}/>
                </span>
            </Label>
        </div>
    );
}

const Label = styled.label`
    cursor: pointer;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.shade};
    border-radius: 30px;
`