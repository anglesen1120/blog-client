import styled, { keyframes } from "styled-components";
import { colors } from "../../utils";

const animationName = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${colors.blue_secondary};
    border-color: ${colors.blue_secondary} transparent ${colors.blue_secondary}
      transparent;
    animation: ${animationName} 1.2s linear infinite;
  }
`;
