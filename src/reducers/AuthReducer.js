import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  BEGIN_LOGIN,
  FINISHED_LOADING,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case BEGIN_LOGIN:
      return { ...state, loading: true }
    case LOGIN_USER_SUCCESS:
      console.log('successful login (reducer), user:', action.payload)
      return { user: action.payload, ...INITIAL_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
      console.log('reducer', action.payload)
      return { ...state, error: 'Authentication Failed', loading: false }

    default:
      return state
  }
}
