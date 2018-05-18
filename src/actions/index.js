
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  BEGIN_LOADING,
  FINISHED_LOADING,
  ERROR_OCCURED,
  USER_UPDATED,
} from './types'

export const emailChanged = text => (
  { type: EMAIL_CHANGED, payload: text })
export const passwordChanged = password => (
  { type: PASSWORD_CHANGED, payload: password })

export const loadingBegan = () => (
  { type: BEGIN_LOADING, payload: true })
export const finishedLoading = () => ({
  type: FINISHED_LOADING, payload: false
})


export const loginUser = ({ email, password }) => {
  return dispatch => (
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
  )
    .then(user => console.log('should dispatch result'))

}

