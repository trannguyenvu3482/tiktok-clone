import React from 'react';
import styled from 'styled-components';
import { IoMdCloseCircle } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
import { FaSpinner } from 'react-icons/fa';
import TiktokLogo from '~/assets/images/TiktokLogo.svg';
import { variables as globalVars } from '~/components';

const Header = () => {
  return (
    <Wrapper>
      <div className="inner">
        <div className="logo">
          <img src={TiktokLogo} alt="Tiktok" />
        </div>
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
        <div className="actions"></div>
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

    .actions {
    }
  }
`;

export default Header;
