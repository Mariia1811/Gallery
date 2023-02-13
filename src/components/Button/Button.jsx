import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

function Button({ incrementPage }) {
  return (
    <Btn type="button" onClick={incrementPage}>
      Load more
    </Btn>
  );
}

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};

export default Button;
