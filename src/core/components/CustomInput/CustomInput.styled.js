import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  max-height: 5rem;
  border-radius: 5px;
  color: var(--color-primary);
  font-size: var(--fs-200);
  padding: 1.5rem 1.7rem;
  border: 1px solid var(--color-input-border);
  ${(props) => ({ ...props.inputStyles })};
  &::placeholder {
    color: rgba(var(--color-rgb-primary), 0.4);
  }
`;

export const Label = styled.label`
  display: block;
  color: var(--color-primary);
  margin-bottom: 8px;
  font-size: var(--fs-200);
`;
