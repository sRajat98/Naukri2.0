import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--color-rgb-black), 0.3);
  z-index: 2;
`;

export const ApplicantsContainer = styled.div`
  position: relative;
  width: fit-content;
  min-width: 35vw;
  min-height: 50vh;
  background-color: var(--color-white);
  border-radius: 2rem;
  padding: 3rem;
  box-shadow: 0 30px 36px rgba(var(--color-rgb-drop-shadow-tile), 0.149);
`;

export const Heading = styled.h3`
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(var(--color-rgb-sky-blue), 0.25);
  color: var(--color-primary);
  font-size: var(--fs-300);
  font-weight: 500;
`;

export const TotalCountContainer = styled.p`
  font-size: var(--fs-200);
  color: var(--color-primary);
  text-align: left;
  margin-bottom: 1rem;
`;

export const ApplicantsListContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--color-applicants-list-bakcground);
  min-height: 45vh;
  max-height: 60vh;
  overflow-y: auto;
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 3rem;
  right: 2.2rem;
`;

export const NoCandidatesFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--color-applicants-list-bakcground);
  min-height: 45vh;
  max-height: 60vh;
  overflow-y: auto;
  text-align: center;
`;
export const NoCandidatesContent = styled.div``;

export const CloseIconStyles = { height: "2.2rem", cursor: "pointer" };

export const noJobsImageStyles = { height: "10rem", marginBottom: "2rem" };

export const noJobsImageUrl =
  "https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-notes-graphic-design-bearicons-flat-bearicons.png";
