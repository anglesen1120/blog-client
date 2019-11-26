import styled from "styled-components";
import { media, colors } from "../../utils";

export const Item = styled.div`
  border: 2px solid ${colors.black};
  padding: 15px;
  width: 100%;
  margin: 15px;
  text-align: center;

  ${media.tablet`
    width: 25%;
  `}

  ${media.desktop`
    width: 20%;
  `}
`;
