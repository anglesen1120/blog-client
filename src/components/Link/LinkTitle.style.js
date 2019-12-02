import styled from "styled-components";
import { media } from "../../utils";

export const LinkTitle = styled.span`
  position: absolute;
  width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;

  ${media.tablet`
    width: 100%;
  `}
`;
