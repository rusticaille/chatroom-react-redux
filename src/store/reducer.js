import {
  CHANGE_VALUE,
  SUBMIT_VALUE,
  HIDE_FORM,
  CHANGE_EMAIL_VALUE,
  CHANGE_PASSWORD_VALUE,
  SUBMIT_LOGIN_FORM,
} from './actions'


const initialState = {
  testMessages: [
    {
      author: 'SuperChat',
      message: 'Hello',
    },
    {
      author: 'SuperChat',
      message: 'Je suis un super chat',
    },
    {
      author: 'SuperChat',
      message: 'je veux des gratouilles',
    },
    {
      author: 'SuperChat',
      message: 'je peux aussi ronronner si tu veux',
    },
  ],
  value: '',
  nickname: 'SuperChat',
  loginClosed: false,
  emailValue: '',
  passwordValue: '',
  loginForm: [ 
    {
    email: '',
    password: '',
    }
  ]
}

function reducer(state=initialState, action) {
  switch (action.type){
    case CHANGE_VALUE:
      return {
        ...state,
        value : action.value,
      };
    case SUBMIT_VALUE:
      return {
        ...state,
        testMessages: [
          ...state.testMessages, 
          {
            author: state.nickname,
            message: state.value,
          }
        ],
        value: '',
      }
    case HIDE_FORM:
      return {
        ...state,
        loginClosed: !state.loginClosed,
      }
    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        emailValue: action.value,
      }
    case CHANGE_PASSWORD_VALUE:
      return {
        ...state,
        passwordValue: action.value,
      }
    case SUBMIT_LOGIN_FORM:
      return {
        ...state,
        loginForm: [
          ...state.loginForm,
          {
            email: state.emailValue,
            password: state.passwordValue,
          }
        ],
        emailValue: '',
        passwordValue: '',
      }
    default:
      return state;
  }
}

export default reducer;
