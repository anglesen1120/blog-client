import styled from "styled-components";
import { media, colors } from "../../utils";

export const Item = styled.div`
  border: 2px solid ${colors.black};
  padding: 15px;
  margin: 15px;
  text-align: center;
  display: ${props => (props.isUserDetail ? "flex" : "block")};
  justify-content: space-between;
  color: ${props => props.isUserDetail && colors.blue_secondary};

  svg {
    &:hover {
      cursor: pointer;
    }
  }

  span {
    margin-left: 5px;
  }

  ${media.tablet`
    width: ${props => !props.isUserDetail && "25%"}
  `}

  ${media.desktop`
    width: ${props => !props.isUserDetail && "20%"}
  `};
`;
