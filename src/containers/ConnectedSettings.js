import { connect } from 'react-redux';

import Settings from 'src/components/Settings';

import {hideLoginFromForm, changeEmailValue, changePasswordValue, submitLoginForm} from 'src/store/actions';

const mapStateToProps = (state) => ({
  isClosed: state.loginClosed,
  emailValue: state.emailValue,
  passwordValue: state.passwordValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleButtonClick: () => {
    dispatch(hideLoginFromForm())
  },

  handleEmailChange: (event) => {
    console.log(event.target.value);
    dispatch(changeEmailValue(event.target.value));
  },

  handlePasswordChange: (event) => {
    console.log(event.target.value);
    dispatch(changePasswordValue(event.target.value));
  },

  handleFormSubmit: (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target)
    dispatch(submitLoginForm())
  }
});


const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default ConnectedSettings;
