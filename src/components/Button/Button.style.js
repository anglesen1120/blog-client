import styled from "styled-components";
import { colors } from "../../utils";

export const Button = styled.button`
  width: 100%;
  border: 1px solid ${colors.black};
  box-shadow: 4px 4px 1px 0px rgba(0, 0, 0, 0.75);
  background-color: ${props => props.isSave && colors.blue_secondary};
  color: ${props => (props.isSave ? colors.white : colors.black)};
  height: ${props => props.isModal && "30px"};
  padding: ${props => (props.isModal ? 0 : "20px")};

  &:hover {
    cursor: pointer;
  }
`;
