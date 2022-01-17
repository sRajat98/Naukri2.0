import styled from "styled-components";

export const Container = styled.main`
  padding: 6rem 16.7rem;
`;

export const IntroContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

export const LeftContainer = styled.div`
  font-size: var(--fs-800);
  color: var(--color-white);
`;

export const RightContainer = styled.div``;

export const GetStartedBtn = styled.a`
  display: block;
  width: fit-content;
  padding: 1.3rem 3rem;
  margin-top: 4rem;
  background-color: var(--color-tertiary);
  border-radius: 5px;
  font-size: var(--fs-200);
  font-weight: bold;
  user-select: none;
  cursor: pointer;
`;

export const imageStyles = {
  height: "30.5rem",
  width: "50rem",
  "border-radius": "2rem",
};

export const logoFontSize = "var(--fs-800)";
