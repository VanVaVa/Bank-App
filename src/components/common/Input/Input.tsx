// import React from "react";
import styled from "styled-components";

// type InputProps = React.DetailedHTMLProps<
//   React.InputHTMLAttributes<HTMLInputElement>,
//   HTMLInputElement
// > & {
//   width?: number;
//   noBG?: boolean;
// };

// export const SmthInput: React.FC<InputProps> = ({ placeholder, width, noBG }) => {
//   return <StyledInput placeholder={placeholder} width={width} $noBG={noBG} onChange={} />;
// };

export const Input = styled.input<{ $width?: number; $noBG?: boolean }>`
  appearance: none;

  background-color: ${(props) =>
    props.$noBG ? "transperent" : props.theme.shade};
  color: ${(props) => props.theme.dark};

  box-sizing: content-box;
  border: none;
  border-radius: 30px;
  padding: 11px 29px;
  width: ${(props) => props.width || 292}px;

  font-size: 32px;

  &:placeholder-shown {
    color: ${(props) => (props.$noBG ? "#000000" : props.theme.light)};
  }
`;
