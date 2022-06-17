import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Image } from '../components';
import { FaCheckCircle } from 'react-icons/fa';
const AccountItem = ({ data }) => {
  return (
    <Link to={`/@${data.nickname}`}>
      <Wrapper>
        <Image className="avatar" src={data.avatar} alt={data.full_name} />
        <div className="info">
          <h4 className="name">
            <span>{data.full_name}</span>
            {data.tick && <FaCheckCircle className="check" />}
          </h4>
          <span className="username">{data.nickname}</span>
        </div>
      </Wrapper>
    </Link>
  );
};

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  cursor: pointer;

  :hover {
    background: rgba(22, 24, 35, 0.03);
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12px;
  }

  .info {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .name {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #333;
  }

  .check {
    margin-left: 8px;
    color: rgb(32, 213, 236);
  }
  .username {
    font-size: 1.4rem;
    color: rgba(22, 24, 35, 0.5);
  }
`;

export default AccountItem;
