import styled from "styled-components";

export const Wrapper = styled.section`
  display: ${props => (props.isLoading ? "block" : "flex")};
  text-align: center;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.isLoading && "100%"};
`;
