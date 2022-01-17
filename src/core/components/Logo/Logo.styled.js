import styled from "styled-components";

export const Logo = styled.div`
  font-size: ${(props) => props.fontSize || "var(--fs-300)"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  color: var(--color-white);
  & span {
    color: var(--color-tertiary);
  }
`;
