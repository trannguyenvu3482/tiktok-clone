import Tippy from '@tippyjs/react/';
import styled from 'styled-components';
import 'tippy.js/dist/tippy.css';

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

import TiktokLogo from '~/assets/images/TiktokLogo.svg';
import { Button, Image, PopperMenu } from '~/components';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import { Search } from '../../Layout/components';

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
          <img src={TiktokLogo} alt="Tiktok" />
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
                src="https://p16-sin-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1655434800&x-signature=KeYcNFDCc2W7Z7LTmzAgbPaqR2Y%3D"
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

// Styling
const localVars = {
  searchBorderRadius: 92,
  searchHeight: 46,
  searchTopSpacer: 6,
  searchButtonWidth: 52,
};

const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
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
