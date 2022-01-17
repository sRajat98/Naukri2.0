import React from "react";
import * as Styled from "./Logo.styled";
const Logo = (props) => {
  return (
    <Styled.Logo fontSize={props.fontSize} fontWeight={props.fontWeight}>
      My<span>Jobs</span>
    </Styled.Logo>
  );
};

export default Logo;
