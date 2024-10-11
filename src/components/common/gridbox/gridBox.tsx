import styled from "styled-components"

export const Gridbox = styled.div<{ $columns?: number, $rows?: number, $gap?: number}>`
    display: grid;
    grid-template-rows: repeat(${props => props.$rows ? props.$rows : 1}, 1fr);
    grid-template-columns: repeat(${props => props.$columns ? props.$columns : 1}, 1fr);
    gap: ${props => props.$gap ? props.$gap : 0}px;
`;