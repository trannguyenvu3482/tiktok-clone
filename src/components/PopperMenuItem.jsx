import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '~/components';

const PopperMenuItem = ({ data, onClick }) => {
  const classes = `menu-item ${data.separate && 'separate'}`;
  return (
    <Wrapper>
      <Button
        className={classes}
        leftIcon={data.icon}
        to={data.to}
        onClick={onClick}
      >
        {data.title}
      </Button>
    </Wrapper>
  );
};

PopperMenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

const Wrapper = styled.div`
  .menu-item {
    width: 100%;
    justify-content: flex-start !important;
    text-align: left;
    align-items: center;
    font-weight: 600;
    border-radius: 0;
    padding: 10px 16px;
    line-height: 1.8rem;

    &.separate {
      border-top: 1px solid rgba(22, 24, 35, 0.12);
    }

    :hover {
      background-color: rgba(22, 24, 35, 0.03);
    }
  }
`;

export default PopperMenuItem;
