import styled from "styled-components";

export const Listing = styled.section`
  display: flex;
  flex-wrap: wrap;

  &::after {
    content: "";
    flex: auto;
  }
`;
