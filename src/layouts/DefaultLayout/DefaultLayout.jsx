import PropTypes from 'prop-types';
import { Header } from '../components';
import { variables } from '~/components';
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

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    width: ${variables.defaultLayoutWidth};
    display: flex;
    padding: 0 ${variables.defaultLayoutHorizontalSpacer};
    margin-top: ${variables.defaultLayoutHeaderHeight};
  }

  .content {
    flex: 1;
  }
`;

export default DefaultLayout;
