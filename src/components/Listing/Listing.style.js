import styled from "styled-components";
import { media } from "../../utils";

export const Listing = styled.section`
  ${media.desktop`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    padding: 10px;
  `}
`;
