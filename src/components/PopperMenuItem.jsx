import styled from 'styled-components';
import { Button } from '~/components';

const PopperMenuItem = ({ data, onClick }) => {
  return (
    <Wrapper>
      <Button
        className="menu-item"
        leftIcon={data.icon}
        to={data.to}
        onClick={onClick}
      >
        {data.title}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .menu-item {
    width: 100%;
    justify-content: flex-start !important;
    text-align: left;
    align-items: center;
    border-radius: 0;
    font-weight: 500;
    padding: 10px 16px;
    line-height: 1.8rem;

    :hover {
      background-color: rgba(22, 24, 35, 0.03);
    }
  }
`;

export default PopperMenuItem;
