import PropTypes from 'prop-types';
import { FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { Button } from '~/components';

const AccountPreview = ({ data }) => {
  return (
    <Wrapper>
      <header className="header">
        <img src={data.avatar} alt="avatar" className="avatar" />
        <Button className="follow-btn" primary small>
          Follow
        </Button>
      </header>

      <div className="body">
        <p className="nickname">
          <strong>{data.nickname}</strong>
          <FaCheckCircle className="check" />
        </p>
        <p className="name">{data.first_name + ' ' + data.last_name}</p>

        <p className="analytics">
          <strong className="value">{data.followers_count}</strong>
          <span className="label">Followers</span>
          <strong className="value">{data.likes_count}</strong>
          <span className="label">Likes</span>
        </p>
      </div>
    </Wrapper>
  );
};

AccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
};

const Wrapper = styled.div`
  padding: 20px;
  width: 320px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
  }

  .body {
    margin-top: 12px;
    color: #161823;
  }
  .nickname {
    font-size: 1.8rem;
    line-height: 1;
    display: flex;
    align-items: center;
  }
  .name {
    font-size: 1.4rem;
  }
  .check {
    margin-left: 4px;
    color: #20d5ec;
    font-size: 1.4rem;
  }
  .analytics {
    margin-top: 8px;
  }
  .value {
    font-size: 1.7rem;
  }

  .value ~ .value {
    margin-left: 8px;
  }

  .label {
    font-size: 1.7rem;
    color: #161823bf;
  }

  .follow-btn {
    padding: 6px 1px;
  }
`;

export default AccountPreview;
