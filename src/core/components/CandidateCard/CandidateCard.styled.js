import styled from "styled-components";

export const Container = styled.div`
  padding: 1.4rem;
  border-radius: 0.5rem;
  background-color: var(--color-white);
`;

export const TopContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
`;

export const ProfileContainer = styled.div`
  padding: 1.5rem 2.3rem;
  border-radius: 50%;
  font-size: var(--fs-300);
  background-color: var(--color-candidate-profile-background);
`;

export const NameAndEmailContainer = styled.div`
  font-size: var(--fs-200);
`;

export const NameContainer = styled.h5`
  color: var(--color-primary);
  margin-bottom: 1rem;
`;

export const EmailContainer = styled.p`
  color: rgba(var(--color-rgb-primary), 0.8);
`;

export const BottomContainer = styled.div`
  font-size: var(--fs-200);
`;

export const SubHeading = styled.h6`
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

export const SkillsContainer = styled.div`
  color: rgba(var(--color-rgb-primary), 0.8);
`;
