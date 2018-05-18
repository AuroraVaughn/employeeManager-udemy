import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: true,
  error: '',
  user: ''
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case EMAIL_CHANGED:
      return Object.assign({}, state, { email: action.payload })
    case PASSWORD_CHANGED:
      return Object.assign({}, state, { password: action.payload })
    default:
      return state
  }
}
