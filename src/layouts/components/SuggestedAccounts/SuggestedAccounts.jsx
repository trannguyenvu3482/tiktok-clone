import PropTypes from 'prop-types';
import styled from 'styled-components';
import AccountItem from './AccountItem';

const SuggestedAccounts = ({ label, data = [], onViewChange, isSeeAll }) => {
  return (
    <Wrapper>
      <div className="line"></div>

      <p className="label">{label}</p>

      {data.map((account) => {
        return <AccountItem key={account.id} data={account} />;
      })}

      <p className="more-btn" onClick={onViewChange}>
        {isSeeAll ? 'See less' : 'See all'}
      </p>
    </Wrapper>
  );
};

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
};

const Wrapper = styled.div`
  .line {
    margin: 8px;
    border-top: 1px solid #1618231e;
  }

  .label {
    font-weight: 600;
    font-size: 1.4rem;
    color: #161823bf;
    padding: 8px;
  }

  .more-btn {
    font-size: 1.4rem;
    color: #fe2c55;
    font-weight: 700;
    padding: 8px;

    cursor: pointer;
  }
`;

export default SuggestedAccounts;
