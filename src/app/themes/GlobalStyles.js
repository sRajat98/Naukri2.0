import styled, { createGlobalStyle } from "styled-components";
import { minMediaQueries } from "utils/Constants/Constants";

const GlobalStyles = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: 'Merriweather', serif;
}

body{
  background-color: var(--color-body-background);
}


button{
  border: none;
  cursor: pointer;
  outline: none;
  user-select: none;
}

h1{
    font-size:5rem;
}

h3{
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.6rem;
  margin: 0.5rem 0;
  @media ${minMediaQueries.laptop}{
    font-size: 2rem;
    line-height: 2.4rem;
  }
}

h4{
  font-style: normal;
  font-variant: normal;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin: 0.5rem 0;
  color: var(--color-black-05);
  @media ${minMediaQueries.laptop}{
    font-size: 1.4rem;
    line-height: 1.6rem;
  }
}

`;

export const SvgContainer = styled.div`
  height: ${(props) => props.height || "24px"};
  margin-left: ${(props) => props.marginLeft || 0};
  ${(props) => ({ ...props.svgStyles })}
`;

export default GlobalStyles;

// ::-webkit-scrollbar {
//   width: 6px;
//   /* border: 1px solid black; */
// }
// ::-webkit-scrollbar-thumb {
//   /* background-color: var(--color-primary) ; */
//   /* border-radius: 4px 0 0 4px; */
//   z-index: 1;
// }
