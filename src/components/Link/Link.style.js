import styled from "styled-components";
import { colors } from "../../utils";
import { Link } from "react-router-dom";

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
`;
