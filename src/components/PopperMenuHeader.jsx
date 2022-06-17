import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';

const PopperMenuHeader = ({ title, onBack }) => {
  return (
    <Wrapper>
      <header className="header">
        <button className="back-btn" onClick={onBack}>
          <FiChevronLeft className="back-btn-icon" />
        </button>
        <h4 className="header-title">{title}</h4>
      </header>
    </Wrapper>
  );
};

PopperMenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  .header {
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: -8px;
    flex-shrink: 0;
  }

  .back-btn {
    width: 50px;
    height: 100%;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    .back-btn-icon {
      font-size: 18px;
    }
  }

  .header-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
    line-height: 1.6;
  }
`;

export default PopperMenuHeader;
