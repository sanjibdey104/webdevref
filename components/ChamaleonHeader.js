import React from "react";
import styled from "styled-components";

const StyledHueHeader = styled.h2`
  background-image: linear-gradient(92deg, #f35626, #feab3a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hueFade 20s linear infinite;

  @keyframes hueFade {
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }
`;
const ChamaleonHeader = ({ children, ...props }) => {
  return <StyledHueHeader {...props}>{children}</StyledHueHeader>;
};

export default ChamaleonHeader;
