import styled from "styled-components";

export const Container = styled.main`
  padding: 0 17rem;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
  color: var(--color-white);
  font-size: var(--fs-200);
`;

export const PostedJobsContainer = styled.div`
  margin-top: 2.4rem;
  color: var(--color-white);
  font-size: var(--fs-300);
`;

export const Heading = styled.div`
  margin-bottom: 2rem;
`;

export const JobTilesContainer = styled.div`
  max-width: 100%;
  display: grid;
  gap: 1.8rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const NoJobsContainer = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoJobsDataContainer = styled.div`
  text-align: center;
`;

export const NoJobsText = styled.div`
  font-size: var(--fs-300);
  color: rgba(var(--color-rgb-primary), 0.8);
  margin-block: 1.8rem 4rem;
`;

export const PostJobBtn = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
  background-color: var(--color-tertiary);
  color: var(--color-white);
  font-size: var(--fs-200);
  padding: 1.3rem 3rem;
  border-radius: 5px;
  cursor: pointer;
`;

export const svgContainerStyles = { height: "1.2rem", "margin-right": "1rem" };

export const noJobsImageStyles = { height: "10rem" };

export const noJobsImageUrl =
  "https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-notes-graphic-design-bearicons-flat-bearicons.png";
