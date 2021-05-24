export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SUBMIT_VALUE = 'SUBMIT_VALUE';
export const HIDE_FORM = 'HIDE_FORM';
export const CHANGE_EMAIL_VALUE = 'CHANGE_EMAIL_VALUE';
export const CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE';
export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';

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

export const changeEmailValue = (newValue) => ({
  type: CHANGE_EMAIL_VALUE,
  value: newValue
});

export const changePasswordValue = (newValue) => ({
  type: CHANGE_PASSWORD_VALUE,
  value: newValue
});

export const submitLoginForm = () => ({
  type: SUBMIT_LOGIN_FORM,
})
