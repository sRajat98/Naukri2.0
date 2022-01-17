import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 8rem;
`;

export const FormContainer = styled.form`
  width: 35vw;
  background-color: var(--color-white);
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 3px 6px rgba(var(--color-rgb-drop-shadow-tile), 0.149);
`;

export const Heading = styled.h4`
  color: var(--color-primary);
  font-size: var(--fs-300);
  margin-bottom: 3rem;
`;

export const InputContainer = styled.div`
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 4rem;
  }
`;

export const Identity = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const IdentityTile = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) =>
    (props.selected && "var(--color-tertiary)") || "var(--color-white"};
  color: ${(props) =>
    (props.selected && "var(--color-white)") || "var(--color-primary"};
  border: ${(props) =>
    !props.selected && "1px solid var(--color-input-border)"};
  opacity: ${(props) => (props.blocked && 0.3) || 1};
`;

export const FormRow = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const LoginBtn = styled.button`
  display: block;
  width: 10rem;
  background-color: var(--color-tertiary);
  padding: 1.2rem;
  color: var(--color-white);
  text-align: center;
  border-radius: 4px;
  margin: 0 auto;
  font-size: var(--fs-200);
  font-weight: 400;
`;

export const SignUpText = styled.p`
  text-align: center;
  margin-top: 5rem;
  font-size: var(--fs-200);
  & span {
    color: var(--color-tertiary);
    cursor: pointer;
  }
`;
