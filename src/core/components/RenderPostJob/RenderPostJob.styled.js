import styled from "styled-components";

export const Container = styled.main`
  padding: 0 17rem;
`;

export const PostJobContainer = styled.form`
  width: fit-content;
  min-width: 35vw;
  background-color: var(--color-white);
  margin: 0 auto;
  margin-top: 6rem;
  text-align: left;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 3px 6px rgba(var(--color-rgb-drop-shadow-tile), 0.149);
`;

export const Heading = styled.h3`
  font-size: var(--fs-300);
  margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
  margin-bottom: 2rem;
  &:last-of-type {
    margin-bottom: 4rem;
  }
`;

export const Label = styled.label`
  display: block;
  color: var(--color-primary);
  margin-bottom: 8px;
  font-size: var(--fs-200);
`;

export const Description = styled.textarea`
  padding: 1.5rem 1.7rem;
  width: 100%;
  color: var(--color-primary);
  background-color: var(--color-textarea-background);
  border-radius: 5px;
  border: 1px solid var(--color-input-border);
  margin-bottom: 2rem;

  &::placeholder {
    color: rgba(var(--color-rgb-primary), 0.4);
  }
`;

export const PostBtn = styled.button`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 1.3rem 5rem;
  border-radius: 5px;
  background-color: var(--color-tertiary);
  color: var(--color-white);
  font-size: var(--fs-200);
  cursor: pointer;
`;
