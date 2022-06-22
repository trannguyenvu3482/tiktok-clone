import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SidebarMenuItem = ({ title, to, icon, activeIcon }) => {
  return (
    <Wrapper activeClassName="active" to={to}>
      <span className="icon">{icon}</span>
      <span className="active-icon">{activeIcon}</span>
      <span className="title">{title}</span>
    </Wrapper>
  );
};

const Wrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  transition: background-color ease-in-out 200ms;
  font-size: 1.8rem;
  font-weight: 700;

  &.active {
    color: rgb(254, 44, 85);

    .icon {
      display: none;
    }

    .active-icon {
      display: flex;
    }
  }

  &:hover {
    background-color: rgba(22, 24, 35, 0.03);
  }

  .title {
    margin-left: 8px;
  }

  .icon,
  .active-icon {
    display: flex;
  }

  .active-icon {
    display: none;
  }
`;

SidebarMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default SidebarMenuItem;
