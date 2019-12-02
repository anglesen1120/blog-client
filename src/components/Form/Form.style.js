import styled from "styled-components";
import { colors } from "../../utils";

export const Form = styled.form`
  min-width: 250px;
  height: 100%;

  input,
  textarea {
    border: 2px solid ${props => (props.isError ? colors.red : colors.black)};
    display: block;
    max-width: 230px;
    width: 100%;
    min-height: 30px;
  }

  textarea {
    resize: none;
    min-height: 60px;
  }

  label {
    max-width: 50px;
    width: 100%;
  }
`;
