import React from "react";
import styled from "styled-components";

import { colors } from "../../../styles/constants";

type TextInputProps = {
    placeholder: string;
    width?: number;
    noBG?: boolean
};

export const TextInput: React.FC<TextInputProps> = (props) => {
    return (
        <StyledInput placeholder={props.placeholder} width={props.width} $noBG={props.noBG}/>
    )
}

const StyledInput = styled.input<{ $width?: number, $noBG?: boolean }>`
    appearance: none;

    background-color: ${props => props.$noBG ? "transperent" : colors.shade};
    color: ${colors.dark};

    box-sizing: content-box;
    border: none;
    border-radius: 30px;
    padding: 11px 29px;
    width: ${props => props.width || 292}px;

    font-size: 32px;

    &:placeholder-shown {
        color: ${props => props.$noBG ? "#000000" : colors.light};
    }
`;