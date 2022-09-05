import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variables } from '~/components';
import { Header } from '../components';
import { Sidebar } from '../components/Sidebar';

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
    max-width: 100%;
    padding: 0 ${variables.defaultLayoutHorizontalSpacer};
    margin-top: ${variables.defaultLayoutHeaderHeight};
    display: flex;
  }

  .content {
    flex: 1;
  }
`;

export default DefaultLayout;
