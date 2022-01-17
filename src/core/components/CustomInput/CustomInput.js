import React from "react";
import * as Styled from "./CustomInput.styled";

const CustomInput = (props) => {
  return (
    <Styled.Container>
      <Styled.Label labelStyles={props.labelStyles}>{props.label}</Styled.Label>
      <Styled.Input
        type={props.type || "text"}
        defaultValue={props.defaultValue}
        value={props.value}
        placeholder={
          (props.label && `Enter your ${props.label}`) || "Enter Value"
        }
        onChange={(e) => props.onChange(e.target.value)}
        inputStyles={props.inputStyles}
      />
    </Styled.Container>
  );
};

export default CustomInput;
