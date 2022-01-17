import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 6rem;
`;

export const Heading = styled.h3`
  margin-bottom: 4rem;
  color: var(--color-primary);
  font-size: var(--fs-300);
  font-weight: 500;
`;

export const TilesContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const Tile = styled.div`
  background-color: var(--color-white);
  padding: 2.4rem 2rem;
  box-shadow: 0 3px 6px rgba(var(--color-rgb-drop-shadow-tile), 0.149);
`;

export const TileHeading = styled.h3`
  --font-size: var(--fs-300);
  color: var(--color-tertiary);
  text-align: left;
  font-size: var(--font-size);
  line-height: calc(var(--font-size) + 1rem);
  margin-bottom: 2.8rem;
`;

export const TileDetails = styled.p`
  font-size: var(--fs-200);
  font-weight: 300;
  color: var(--color-primary);
`;
