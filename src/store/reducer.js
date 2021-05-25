import {
  CHANGE_VALUE,
  SUBMIT_VALUE,
  HIDE_FORM,
  CHANGE_LOGIN_VALUES,
  LOGIN_SUCCESS,
  LOGIN_ERROR
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
  nickname: null,
  loginClosed: false,
  loginForm: {
    email: '',
    password: '',
    hasError: false,
  },
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
    case CHANGE_LOGIN_VALUES:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.keysToChange]: action.value,
        }
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        nickname: action.nickname,
        loginClosed: !state.loginClosed,
        loginForm: {
          ...state.loginForm,
          email: '',
          password: '',
          hasError: false,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginForm:{
          ...state.loginForm,
          hasError: true,
        }
      }
    default:
      return state;
  }
}

export default reducer;
