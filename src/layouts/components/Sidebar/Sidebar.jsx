import { useEffect, useState } from 'react';
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
import { getSuggested } from '~/services/userService';
import { SuggestedAccounts } from '../SuggestedAccounts';
import { SidebarMenu, SidebarMenuItem } from './Menu';

const INIT_PAGE = 1;
const PER_PAGE = 5;

const Sidebar = () => {
  const [page, setPage] = useState(INIT_PAGE);
  const [suggestedUser, setSuggestedUser] = useState([]);
  const [isSeeAll, setIsSeeAll] = useState(false);

  useEffect(() => {
    getSuggested({ page, perPage: PER_PAGE })
      .then((data) => {
        setSuggestedUser((prevUsers) => {
          return [...prevUsers, ...data.data];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, isSeeAll]);

  const handleViewChange = () => {
    setIsSeeAll(!isSeeAll);

    if (isSeeAll) {
      setSuggestedUser([]);
      setPage(1);
    } else {
      setPage(2);
      setIsSeeAll(true);
    }
  };

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

      <SuggestedAccounts
        label="Suggested accounts"
        data={suggestedUser}
        onViewChange={handleViewChange}
        isSeeAll={isSeeAll}
      />
      <SuggestedAccounts label="Following accounts" />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 356px;
  padding: 20px 0 26px 8px;
  margin-left: -24px;
`;

export default Sidebar;
