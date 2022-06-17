import PropTypes from 'prop-types';
import styled from 'styled-components';

const SidebarMenu = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.nav``;

SidebarMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarMenu;
