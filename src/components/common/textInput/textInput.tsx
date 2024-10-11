import React from "react";
import styled from "styled-components";

type TextInputProps = {
    placeholder: string;
    width?: string;
};

export const TextInput: React.FC<TextInputProps> = (props) => {
    return (
        <StyledInput placeholder={props.placeholder} width={props.width}/>
    )
}

const StyledInput = styled.input<{ $width?: string }>`
    appearance: none;

    background-color: #DBDEF0;
    color: black;

    box-sizing: content-box;
    border: none;
    border-radius: 30px;
    padding: 11px 29px;
    width: ${props => props.width || "292px"};

    font-size: 32px;

    &:placeholder-shown {
        color: white;
    }
`;