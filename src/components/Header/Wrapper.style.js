import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => !props.isPostComment && "10px 25px"};
`;
