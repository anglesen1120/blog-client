import styled from "styled-components";
import { colors } from "../../utils";

export const Form = styled.form`
  padding: 20px;

  input,
  textarea {
    border: 2px solid ${colors.black};
    display: block;
    max-width: 230px;
    width: 100%;
  }

  textarea {
    resize: none;
  }

  label {
    max-width: 50px;
    width: 100%;
  }
`;
