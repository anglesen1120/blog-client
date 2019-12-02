import styled from "styled-components";
import { colors } from "../../utils";

export const Action = styled.section`
  display: flex;
  align-items: center;
  color: ${colors.blue_secondary};

  svg {
    font-size: 40px;
    &:hover {
      cursor: pointer;
    }
  }

  span {
    margin-left: 5px;
  }
`;
