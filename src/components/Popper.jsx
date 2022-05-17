import React from 'react';
import styled from 'styled-components';
const Popper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background: white;
  width: 100%;
  min-height: 100px;
  height: 100%;
  /* max-height: min((100vh - 96vh) - 60px, 734px); */
  padding-top: 8px;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
  border-radius: 8px;
`;
export default Popper;
