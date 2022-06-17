import styled from 'styled-components';
import { SidebarMenu, SidebarMenuItem } from './Menu';
import { routes } from '~/config';
import {
  HomeIcon,
  HomeIconActive,
  UserGroupIcon,
  UserGroupIconActive,
  LiveIcon,
  LiveIconActive,
} from '~/components/Icons';

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarMenu>
        <SidebarMenuItem
          title="For You"
          to={routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeIconActive />}
        />
        <SidebarMenuItem
          title="Following"
          to={routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupIconActive />}
        />
        <SidebarMenuItem
          title="LIVE"
          to={routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveIconActive />}
        />
      </SidebarMenu>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 356px;
  padding: 20px 0 26px 8px;
  margin-left: -24px;
`;

export default Sidebar;
