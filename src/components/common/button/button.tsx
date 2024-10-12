import styled from 'styled-components'

import { colors, font } from '../../../styles/constants'

export const StyledButton = styled.button`
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