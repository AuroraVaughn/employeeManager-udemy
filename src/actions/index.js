import firebase from 'firebase'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  BEGIN_LOGIN,
  FINISHED_LOADING,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from './types'

export const emailChanged = text => (
  { type: EMAIL_CHANGED, payload: text })

export const passwordChanged = password => (
  { type: PASSWORD_CHANGED, payload: password })

export const loadingBegan = () => (
  { type: BEGIN_LOGIN, payload: true })
export const loadingFinished = () => ({
  type: FINISHED_LOADING, payload: false
})
export const userLoginFailed = error => (
  { type: LOGIN_USER_FAIL, payload: error }
)
export const userLoggedIn = user => (
  { type: LOGIN_USER_SUCCESS, payload: user })


const loginUserSuccess = (dispatch, user) => {
  dispatch(userLoggedIn(user))
}

const loginUserFail = (dispatch, user) => {
  dispatch(userLoginFailed(user))
}

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch(loadingBegan())
    return (firebase.auth()
      .signInWithEmailAndPassword(email, password))
      .then(user => {
        loginUserSuccess(dispatch, user)
        return dispatch(loadingFinished())
      })
      .catch(() => {
        return firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(user => loginUserFail(dispatch, user))

      })
      .then((user) => loginUserSuccess(dispatch, user))

  }
}

