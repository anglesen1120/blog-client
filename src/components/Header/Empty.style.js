import styled from "styled-components";
import { media } from "../../utils";

export const Empty = styled.span`
  width: 40px;
  display: none;

  ${media.tablet`
    display: block;
  `}
`;
