import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: transparent linear-gradient(248deg, #303f60 0%, #1a253c 100%) 0%
      0% no-repeat padding-box;
    width: 100%;
    min-height: 52vh;
    z-index: -1;
  }
`;
