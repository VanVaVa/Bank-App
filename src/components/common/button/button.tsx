import React from 'react';
import styled from 'styled-components'

import { colors, font } from '../../../styles/constants'


type ButtonProps = {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <StyledButton>{text}</StyledButton>
    )
}

const StyledButton = styled.button`
    background-color: ${colors.accent};
    color: white;
    font-size: ${font.size};

    border: none;
    border-radius: 30px;

    padding: 11px 29px;

    &:hover {
        background-color: ${colors.accentDark}
    }
`;