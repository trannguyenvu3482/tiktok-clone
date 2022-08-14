import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import Tippy from '@tippyjs/react';

import { Popper } from '~/components';
import { AccountPreview } from './AccountPreview';

const AccountItem = () => {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <Popper>
          <div className="preview">
            <AccountPreview />
          </div>
        </Popper>
      </div>
    );
  };

  return (
    <Tippy
      interactive
      delay={[800, 0]}
      offset={[-20, 0]}
      placement="bottom"
      render={renderPreview}
      animation={false}
    >
      <WrapperInside>
        <img className="avatar" src="https://picsum.photos/50" alt="avatar" />
        <div className="item-info">
          <p className="nickname">
            <strong>johnnydang</strong>
            <FaCheckCircle className="check" />
          </p>
          <p className="name">Johnny Dang</p>
        </div>
      </WrapperInside>
    </Tippy>
  );
};

AccountItem.propTypes = {};

const WrapperInside = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;

  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    margin-left: 12px;
  }

  .nickname {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    color: #161823;
    line-height: 1.1;
  }

  .name {
    font-size: 1.2rem;
    color: #161823bf;
  }

  .check {
    margin-left: 4px;
    color: #20d5ec;
    font-size: 1.4rem;
  }
`;

export default AccountItem;
