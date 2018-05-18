import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Card, CardSection, TextField, Spinner } from './common'
import { emailChanged, passwordChanged } from '../actions'
class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }
  onPasswordChange(password) {
    this.props.passwordChanged(password)
  }
  render() {
    const { email, password } = this.props
    console.log(this.props)
    return (
      <Card>
        <CardSection>
          <TextField
            placeholder={'my_email@domain.com'}
            label={'Email'}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <TextField
            secureTextEntry
            isPassword={true}
            placeholder={'password'}
            label={'Password'}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { password, email } = state
  return {
    password,
    email
  }
}
const mapDispatch = {
  emailChanged,
  passwordChanged
}

export default connect(mapStateToProps, mapDispatch)(LoginForm)

