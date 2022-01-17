import styled from "styled-components";

export const Container = styled.nav`
  background-color: transparent;
  padding-inline: clamp(1rem, 4vw, 7rem);
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(var(--color-rgb-sky-blue), 0.25);
  padding-block: 1.2rem;
`;

export const LogoContainer = styled.div`
  padding-block: 1rem;
  cursor: pointer;
`;

export const LoginBtnContainer = styled.a`
  display: block;
  color: var(--color-white);
  padding: 1.3rem 2.3rem;
  font-size: var(--fs-200);
  background-color: rgba(var(--color-rgb-sky-blue), 0.2);
  border: 1px solid var(--color-tertiary);
  border-radius: 5px;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
`;
export const PostJobBtn = styled.div`
  color: rgba(var(--color-rgb-white), 0.8);
  font-size: var(--fs-250);
`;

export const ProfileContainer = styled.div`
  position: relative;
  padding: 0.5rem 1.3rem;
  border-radius: 50%;
  font-size: var(--fs-300);
  background-color: var(--color-candidate-profile-background);
  user-select: none;
`;

export const LogoutContainer = styled.div`
  position: absolute;
  bottom: -4rem;
  right: -85%;
  padding: 1rem;
  border-radius: 5px;
  background-color: var(--color-white);
  font-size: var(--fs-200);
`;
