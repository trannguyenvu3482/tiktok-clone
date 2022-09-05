import PropTypes from 'prop-types';
import '~/assets/styles/GlobalStyles.scss';

const GlobalStyles = ({ children }) => {
  return children;
};

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
