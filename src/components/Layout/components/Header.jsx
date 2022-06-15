import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styled from 'styled-components';

import { BiMessageAltMinus, BiUser } from 'react-icons/bi';
import { IoMdCloseCircle, IoMdHelpCircleOutline } from 'react-icons/io';
import {
  IoSearchSharp,
  IoEarthSharp,
  IoEllipsisVertical,
  IoPaperPlaneOutline,
} from 'react-icons/io5';
import { HiPlus } from 'react-icons/hi';
import { FaSpinner, FaCoins } from 'react-icons/fa';
import {
  MdOutlineKeyboardAlt,
  MdOutlineSettings,
  MdOutlineLogout,
} from 'react-icons/md';

import TiktokLogo from '~/assets/images/TiktokLogo.svg';
import {
  variables as globalVars,
  Popper,
  AccountItem,
  Button,
  PopperMenu,
} from '~/components';

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
  const [searchResults, setSearchResults] = useState([]);
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
        <HeadlessTippy
          visible={searchResults.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className="search-result" tabIndex={1} {...attrs}>
              <Popper>
                <h4 className="search-title">Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </Popper>
            </div>
          )}
        >
          <div className="search">
            <input
              type="text"
              placeholder="Search accounts and videos"
              spellCheck="false"
            />
            <button className="clear">{<IoMdCloseCircle />}</button>
            {/* <FaSpinner className="loading" /> */}
            <button className="search-btn">{<IoSearchSharp />}</button>
          </div>
        </HeadlessTippy>

        <div className="actions">
          {currentUser ? (
            <>
              <Button thin leftIcon={<HiPlus />}>
                Upload
              </Button>

              <Tippy delay={[0, 0]} content="Message" placement="bottom">
                <button className="action-btn">
                  <IoPaperPlaneOutline className="action-btn-icon" />
                </button>
              </Tippy>
              <Tippy delay={[0, 0]} content="Inbox" placement="bottom">
                <button className="action-btn">
                  <BiMessageAltMinus className="action-btn-icon" />
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
              <img
                className="user-avatar"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1655434800&x-signature=KeYcNFDCc2W7Z7LTmzAgbPaqR2Y%3D"
                alt="Nguyen Van B"
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

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1150px;
    height: 100%;
    padding: 0 24px;

    .search,
    .search-result {
      width: 361px;
    }

    .search {
      position: relative;
      display: flex;
      width: 361px;
      height: 46px;
      background-color: rgba(22, 24, 35, 0.06);
      border-radius: ${localVars.searchBorderRadius}px;
      padding-left: 16px;
      border: 1.5px solid transparent;

      input {
        flex: 1;
        height: 100%;
        padding: 12px 0;
        color: ${globalVars.black};
        font-size: 1.6rem;
        background-color: transparent;
        caret-color: red;
      }

      input:not(:placeholder-shown) ~ .search-btn {
        color: rgba(22, 24, 35, 0.75);
      }

      .clear,
      .loading {
        position: absolute;
        right: calc(${localVars.searchButtonWidth}px + 16px);
        top: 50%;
        transform: translateY(-50%);
        color: rgba(22, 24, 35, 0.34);
        font-size: 16px;
      }

      .search-btn {
        width: ${localVars.searchButtonWidth}px;
        height: 100%;
        border-top-right-radius: ${localVars.searchBorderRadius}px;
        border-bottom-right-radius: ${localVars.searchBorderRadius}px;
        font-size: 1.8rem;
        color: rgba(22, 24, 35, 0.34);

        :hover {
          background-color: rgba(22, 24, 35, 0.03);
          cursor: pointer;
        }

        :active {
          background-color: rgba(22, 24, 35, 0.06);
        }
      }

      ::after {
        content: '';
        position: absolute;
        height: calc(${localVars.searchHeight}px - 16px);
        width: 1px;
        top: ${localVars.searchTopSpacer}px;
        right: ${localVars.searchButtonWidth}px;
        background-color: rgba(22, 24, 35, 0.12);
      }

      :focus-within {
        border-color: rgba(22, 24, 35, 0.2);
      }
    }

    .search-title {
      font-size: 1.4rem;
      font-weight: 600;
      padding: 5px 12px;
      color: rgba(22, 24, 35, 0.5);
    }

    .actions {
      display: flex;
      align-items: center;
    }

    .action-btn {
      background-color: transparent;
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
