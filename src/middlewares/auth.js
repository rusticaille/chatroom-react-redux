import axios from "axios";
import { loginSuccess, loginError, SUBMIT_LOGIN_FORM } from 'src/store/actions';


const authMiddleware = (store) => (next) => (action) => {
  console.log('je suis authMiddleware et je recois laction : ', action);
  if (action.type === SUBMIT_LOGIN_FORM) {
    const state = store.getState();
    const config = {
      method: 'post',
      url: 'http://localhost:3001/login',
      data: {
        email: state.loginForm.email,
        password: state.loginForm.password,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        store.dispatch(loginSuccess(response.data.pseudo));
      })
      .catch (() => {
        store.dispatch(loginError());
      });
  } else {
    next(action);
  }
};

export default authMiddleware;
