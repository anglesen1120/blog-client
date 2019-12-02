import styled from "styled-components";
import { colors } from "../../utils";

export const Button = styled.button`
  padding: 20px;
  width: 100%;
  border: 1px solid ${colors.black};
  box-shadow: 4px 4px 1px 0px rgba(0, 0, 0, 0.75);
  background-color: ${props => props.isSave && colors.blue_secondary};
  color: ${props => (props.isSave ? colors.white : colors.black)};

  &:hover {
    cursor: pointer;
  }
`;
