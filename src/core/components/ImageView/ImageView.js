import React from "react";
import { Img } from "./ImageView.styled";

const ImageView = ({ src, label, imageStyles, title }) => {
  return <Img src={src} alt={label} propStyles={imageStyles} title={title} />;
};

export default ImageView;
