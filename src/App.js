import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

import LoginForm from './components/LoginForm'
class App extends Component {
  componentWillMount() {
    try {
      const config = {
        apiKey: 'AIzaSyA_WfeaPHk8aK-C2qxTqml14oI70goqjJU',
        authDomain: 'employeemanager-udem.firebaseapp.com',
        databaseURL: 'https://employeemanager-udem.firebaseio.com',
        projectId: 'employeemanager-udem',
        storageBucket: 'employeemanager-udem.appspot.com',
        messagingSenderId: '411246532517'
      };

      firebase.initializeApp(config);
    } catch (err) { console.error(err) }

  }
  render() {
    const store = createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk))

    return (
      <Provider store={store} >
        <View>
          <LoginForm />
        </View>
      </Provider>
    )
  }


}


export default App
