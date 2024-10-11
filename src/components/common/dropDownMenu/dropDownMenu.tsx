import React from "react";
import styled from 'styled-components'
import { useState, } from "react";

import { colors, font } from '../../../styles/constants'
import './dropDownMenu.css'

type DropDownMenuProps = {
    options: Array<string>;
    accent?: boolean;
    defaultValue: string,
}


export const DropDownMenu: React.FC<DropDownMenuProps> = ({ options, accent = false, defaultValue }) => {
    const[opened, setOpened] = useState(false);
    const[currentValue, setCurrentValue] = useState(defaultValue);

    const listOptions = options.map((option: string) => 
        <li className="dropdown_element"
            key={option}
        >
            <DropDownElement $accent={accent}
                             onClick={() => choose(option)}
                             type="button"
            >
                {option}
            </DropDownElement>
        </li>
    )

    const imgStyle = {
        transform: opened ? 'rotate(0.5turn)' : 'rotate(0)',
        transformOrigin: "50% 62.5%", 
        filter: accent ? 'invert(100%)' : 'invert(0)',
        marginLeft: "10px",
    }

    function toggleMenu() {
        setOpened(!opened);
    }

    const choose = (value: string) => {
        setCurrentValue(value);
        setOpened(false);
    }


    return (
            <DropdownWrapper $accent={accent}>
                <DropDownElement    onClick={toggleMenu}
                                    $accent={accent}
                                    $label={true}
                                    type="button"
                >
                    {currentValue}
                    <img src="../../../../icons/down_arrow.svg" style={imgStyle} ></img>
                </DropDownElement>
                <DropdownList $displayed={opened}
                              $accent={accent}
                >
                    {listOptions}
                </DropdownList>
            </DropdownWrapper>
    )
}

const DropdownWrapper = styled.span<{ $accent: boolean }>`
    background-color: ${props => props.$accent ? colors.accent : colors.light};
    color: ${props => props.$accent ? "white" : "black"};
    display: inline-grid;

    border: none;
    border-radius: 30px;
`;

const DropdownList = styled.ul<{ $displayed: boolean, $accent: boolean,}>`
    background-color: ${props => props.$accent ? colors.accent : colors.light};

    position: absolute;
    display: ${props => props.$displayed ? "grid" : "none"};

    z-index: 1;
    margin-top: 60px;
    padding: 0px 29px 11px 29px;

    border-radius: 30px;
    filter: drop-shadow(0 13px 5px grey);
`;

const DropDownElement = styled.button<{ $accent: boolean, $label?: boolean }>`
    background-color: transparent;
    color: currentColor;

    font-size: ${font.size};

    padding: ${props => props.$label ? "11px 29px" : "none"};

    border: none;
    border-radius: 30px;
    box-sizing: border-box;
`;