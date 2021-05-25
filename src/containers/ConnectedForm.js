import { connect } from 'react-redux';

import Form from 'src/components/Form';
import isUserLogged from 'src/selectors/isUserLogged';

import {changeInputValue, submitInputValue} from 'src/store/actions';

const mapStateToProps = (state) => ({
  value: state.value,
  isLogged: isUserLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (event) => {
    dispatch(changeInputValue(event.target.value));
  },
  handleInputSubmit: (event) => {
    event.preventDefault();
    dispatch(submitInputValue());
  },
});

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(Form);

export default ConnectedForm;
