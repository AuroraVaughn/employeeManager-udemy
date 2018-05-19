import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Button, Card, CardSection, TextField, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'
class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }
  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }
  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }} >
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View >)
    }
  }
  renderButton() {
    console.log('render button loading?', this.props.loading)
    if (this.props.loading) {
      return <Spinner size="large" />
    } else {
      return <Button onPress={this.onButtonPress.bind(this)}> Login</Button>
    }
  }
  render() {
    const { email, password, loading } = this.props

    return (
      <Card>
        <CardSection>
          <TextField
            placeholder={'my_email@domain.com'}
            label={'Email'}
            value={email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <TextField
            secureTextEntry
            isPassword={true}
            placeholder={'password'}
            label={'Password'}
            value={password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
const mapStateToProps = state => {

  return {
    password: state.auth.password,
    email: state.auth.email,
    error: state.auth.error,
    loading: state.auth.loading
  }
}
const mapDispatch = {
  emailChanged,
  passwordChanged,
  loginUser
}

export default connect(mapStateToProps, mapDispatch)(LoginForm)

