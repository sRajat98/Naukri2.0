import styled from "styled-components";
// import { colors } from "app/themes/variables";

export const container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export const arrowsContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0 0.5rem 0 0.5rem;
`;

export const arrowContainer = styled.div`
  background-color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  img {
    height: 1.1rem;
  }
  cursor: pointer;
`;

export const currentPage = styled.div`
  padding: 0.5rem 1.2rem;
  margin: 0 0.8rem;
  background-color: rgba(var(--color-rgb-sky-blue), 0.2);
  color: var(--color-primary-blue);
  font-size: var(--fs-200);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const verticalDivider = styled.div`
  position: absolute;
  width: 1px;
  height: 80%;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid var(--color-gray);
`;
export const pageNumber = styled.p`
  font-size: 1.6rem;
  margin: 0.8rem 0 0 0;
`;
