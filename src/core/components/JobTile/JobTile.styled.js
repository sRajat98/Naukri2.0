import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
  background-color: var(--color-white);
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(var(--color-rgb-drop-shadow-tile), 0.149);
  text-align: left;
`;

export const Heading = styled.div`
  font-size: var(--fs-250);
  color: var(--color-primary);
  margin-bottom: 1rem;
`;

export const Details = styled.div`
  font-size: var(--fs-200);
  color: rgba(var(--color-rgb-primary), 0.8);
  margin-bottom: 2rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LocationContainer = styled.div`
  font-size: var(--fs-200);
  color: rgba(var(--color-rgb-primary), 0.8);
`;

export const ViewApplicationsBtn = styled.a`
  display: block;
  width: fit-content;
  padding: 1rem 1.5rem;
  font-size: var(--fs-200);
  background-color: rgba(var(--color-rgb-sky-blue), 0.2);
  border-radius: 5px;
  color: var(--color-primary);
  cursor: pointer;
`;
