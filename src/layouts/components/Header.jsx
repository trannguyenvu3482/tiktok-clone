import Tippy from '@tippyjs/react/';
import { BiUser } from 'react-icons/bi';
import { FaCoins } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { IoEarthSharp, IoEllipsisVertical } from 'react-icons/io5';
import {
  MdOutlineKeyboardAlt,
  MdOutlineLogout,
  MdOutlineSettings,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'tippy.js/dist/tippy.css';

import TiktokLogo from '~/assets/images/TiktokLogo.svg';
import { Button, Image, PopperMenu } from '~/components';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import { routes } from '~/config';
import { Search } from '.';

const MENU_ITEMS = [
  {
    icon: <IoEarthSharp />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        { type: 'language', code: 'en', title: 'English' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
      ],
    },
  },
  {
    icon: <IoMdHelpCircleOutline />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <MdOutlineKeyboardAlt />,
    title: 'Keyboard shortcuts',
  },
];

const Header = () => {
  const currentUser = true;

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle language selection
        break;
      default:
        // Handle other menu items
        break;
    }
  };

  const userMenu = [
    {
      icon: <BiUser />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FaCoins />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <MdOutlineSettings />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <MdOutlineLogout />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <Wrapper>
      <div className="inner">
        <div className="logo">
          <Link to={routes.home} className="logo-link">
            <img src={TiktokLogo} alt="Tiktok" />
          </Link>
        </div>

        <Search />

        <div className="actions">
          {currentUser ? (
            <>
              <Button thin leftIcon={<HiPlus />}>
                Upload
              </Button>

              <Tippy delay={[0, 0]} content="Message" placement="bottom">
                <button className="action-btn">
                  <MessageIcon className="action-btn-icon" />
                </button>
              </Tippy>
              <Tippy delay={[0, 0]} content="Inbox" placement="bottom">
                <button className="action-btn">
                  <InboxIcon className="action-btn-icon" />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button thin leftIcon={<HiPlus />}>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          <PopperMenu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className="user-avatar"
                src=""
                alt="Nguyen Van B"
                fallback="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/262195195_1942176485962349_3255690939105831461_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7_QS25WWdjcAX_7jEEW&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT8hh7wKW2HVlkQ4n91r0y0PGYHBiJyrfqijutumZ10uKg&oe=62AF459E"
              />
            ) : (
              <button className="more-btn">
                <IoEllipsisVertical />
              </button>
            )}
          </PopperMenu>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);

  .logo {
    display: flex;
  }

  .logo-link {
    display: flex;
  }

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1150px;
    height: 100%;
    padding: 0 24px 0 20px;

    .actions {
      display: flex;
      align-items: center;
    }

    .action-btn {
      background-color: transparent;
      display: flex;
      color: #161623;
      padding: 4px 12px;
      cursor: pointer;

      &-icon {
        font-size: 2.4rem;
      }
    }

    .more-btn {
      font-size: 2rem;
      margin-left: 24px;
      background-color: transparent;
      padding: 8px;
      cursor: pointer;
    }

    .user-avatar {
      display: flex;
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 50%;
      margin-left: 12px;
      cursor: pointer;
    }
  }
`;

export default Header;
