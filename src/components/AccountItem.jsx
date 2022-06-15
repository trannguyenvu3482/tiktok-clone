import styled from 'styled-components';
import { Image } from '../components';
import { FaCheckCircle } from 'react-icons/fa';
const AccountItem = () => {
  return (
    <Wrapper>
      <Image
        className="avatar"
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1652965200&x-signature=NI8wVOTGAjgjBTAZpjMAAxERzwU%3D"
        alt="Hoaa"
      />
      <div className="info">
        <h4 className="name">
          <span>hoaa.hanassii</span>
          <FaCheckCircle className="check" />
        </h4>
        <span className="username">Đào Lê Phương Hoa</span>
      </div>
    </Wrapper>
  );
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
