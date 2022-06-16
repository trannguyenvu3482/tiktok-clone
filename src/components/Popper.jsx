import React from 'react';
import styled from 'styled-components';
const Popper = ({ children, className = '' }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background: white;
  width: 100%;
  min-height: 100px;
  height: 100%;
  max-height: min((100vh - 96px) - 60px, 734px);
  padding-top: 8px;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  .menu-popper {
    padding-bottom: 8px;
  }
`;
export default Popper;
