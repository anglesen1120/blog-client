import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin: 15px;
  display: ${props => !props.isHome && "flex"};

  button {
    &:first-child {
      margin-right: ${props => !props.isHome && "5px"};
    }

    &:last-child {
      margin-left: ${props => !props.isHome && "5px"};
    }
  }
`;
