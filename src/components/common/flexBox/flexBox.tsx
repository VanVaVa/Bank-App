import styled from "styled-components"

export const FlexBox = styled.div<{ $wrap?: boolean, $justifyContent?: string, $alignItems?: string }>`
    display: flex;
    flex-wrap: ${props => props.$wrap ? "wrap" : "nowrap"};
    justify-content: ${props => props.$justifyContent};
    align-items: ${props => props.$alignItems};

`