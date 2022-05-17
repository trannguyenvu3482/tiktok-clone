import React from 'react';
import { Header } from '../components';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    width: 1150px;
    min-height: 1000px;
  }
`;

export default DefaultLayout;
