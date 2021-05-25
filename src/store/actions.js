export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SUBMIT_VALUE = 'SUBMIT_VALUE';
export const HIDE_FORM = 'HIDE_FORM';
export const CHANGE_LOGIN_VALUES = 'CHANGE_LOGIN_VALUES';
export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const changeInputValue = (newValue) => ({
  type: CHANGE_VALUE,
  value: newValue
});

export const submitInputValue = () => ({
  type: SUBMIT_VALUE,
});

export const hideLoginFromForm = () => ({
  type: HIDE_FORM,
});

export const changeLoginValues = (keysToChange, newValue) => ({
  type: CHANGE_LOGIN_VALUES,
  keysToChange: keysToChange,
  value: newValue,
});

export const submitLoginForm = () => ({
  type: SUBMIT_LOGIN_FORM,
});

export const loginSuccess = (nickname) => ({
  type: LOGIN_SUCCESS,
  nickname: nickname,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});
