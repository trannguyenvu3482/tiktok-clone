import styled from 'styled-components';
import {
  HomeIcon,
  HomeIconActive,
  LiveIcon,
  LiveIconActive,
  UserGroupIcon,
  UserGroupIconActive,
} from '~/components/Icons';
import { routes } from '~/config';
import { SuggestedAccounts } from '../SuggestedAccounts';
import { SidebarMenu, SidebarMenuItem } from './Menu';

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

      <SuggestedAccounts label="Suggested accounts" />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 356px;
  padding: 20px 0 26px 8px;
  margin-left: -24px;
`;

export default Sidebar;
