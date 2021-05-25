import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import isUserLogged from 'src/selectors/isUserLogged';

import {hideLoginFromForm, changeLoginValues, submitLoginForm} from 'src/store/actions';

const mapStateToProps = (state) => ({
  isClosed: state.loginClosed,
  emailValue: state.loginForm.email,
  passwordValue: state.loginForm.password,
  isLogged: isUserLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleButtonClick: () => {
    dispatch(hideLoginFromForm())
  },

  handleEmailChange: (event) => {
    console.log(event.target.value);
    dispatch(changeLoginValues('email', event.target.value));
  },

  handlePasswordChange: (event) => {
    console.log(event.target.value);
    dispatch(changeLoginValues('password', event.target.value));
  },

  handleFormSubmit: (event) => {
    event.preventDefault();
    dispatch(submitLoginForm())
  }
});


const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default ConnectedSettings;
