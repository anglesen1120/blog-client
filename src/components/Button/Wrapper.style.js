import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin: 15px;
  display: ${props => !props.isHome && "flex"};
`;
