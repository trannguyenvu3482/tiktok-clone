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
    display: flex;
    padding: 0 24px;
  }

  .content {
    flex: 1;
  }
`;

export default DefaultLayout;
