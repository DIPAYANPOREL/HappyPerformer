import React from "react";
import styled from "styled-components";


const Overlay = styled.div`
  display: ${({ isBlurred }) => (isBlurred ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const BlurEffect = ({ isBlurred }) => {
  return <Overlay isBlurred={isBlurred} />;
};

export default BlurEffect;