import React from "react";
import styled from 'styled-components'
import { useState, } from "react";

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
                    {/* <StyledImg src="../../../../icons/down_arrow.svg" style={imgStyle} /> */}
                    <StyledSvg style={imgStyle} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.82837" y="11.3137" width="20" height="4" transform="rotate(45 2.82837 11.3137)"/>
                    <rect x="25.4558" y="11.3137" width="4" height="20" transform="rotate(45 25.4558 11.3137)"/>
                    </StyledSvg>

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
    background-color: ${props => props.$accent ? props.theme.accent : props.theme.light};
    color: ${props => props.$accent ? props.theme.light : props.theme.dark};
    display: inline-grid;

    border: none;
    border-radius: 30px;
`;

const DropdownList = styled.ul<{ $displayed: boolean, $accent: boolean,}>`
    background-color: ${props => props.$accent ? props.theme.accent : props.theme.light};

    position: absolute;
    display: ${props => props.$displayed ? "grid" : "none"};

    z-index: 1;
    margin-top: 60px;
    padding: 11px 29px 11px 29px;

    border-radius: 30px;
    filter: drop-shadow(0 5px 3px black);
`;

const DropDownElement = styled.button<{ $accent: boolean, $label?: boolean }>`
    background-color: transparent;
    color: currentColor;

    padding: ${props => props.$label ? "11px 29px" : "none"};

    border: none;
    border-radius: 30px;
    box-sizing: border-box;
`;

const StyledSvg = styled.svg`
    fill: currentColor;
`;