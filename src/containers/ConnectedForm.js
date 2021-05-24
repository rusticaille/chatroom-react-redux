import { connect } from 'react-redux';

import Form from 'src/components/Form';

import {changeInputValue, submitInputValue} from 'src/store/actions';

const mapStateToProps = (state) => ({
  value: state.value
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
