import styled from 'styled-components'

import { font } from '../../../styles/constants'

export const StyledButton = styled.button`
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.light};
    font-size: ${font.size};

    border: none;
    border-radius: 30px;

    padding: 11px 29px;

    &:hover {
        background-color: ${props => props.theme.accentDark}
    }
`;