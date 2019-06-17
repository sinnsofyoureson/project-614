import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogin, userLogout } from '../actions';
import Loader from '../containers/Loader';
import { Wrapper, Card, Headline, Input, ErrorWrapper, Button, Avatar } from '../containers/Styled';

const Login: React.FC = (props: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    serverError: props.epicReducer.errorMessage
  });

  const users = props.epicReducer.users;

  const validateMail = () => {
    if (email === '') {
      setErrors({
        email: 'E-Mail required',
        password: errors.password,
        serverError: errors.serverError
      });
    } else {
      setErrors({
        email: '',
        password: errors.password,
        serverError: errors.serverError
      });
    };
  };
  
  const validatePassword = () => {
    if (password === '') {
      setErrors({
        email: errors.email,
        password: 'Password required',
        serverError: errors.serverError
      });
    } else if (password.length < 6) {
      setErrors({
        email: errors.email,
        password: 'Must have more than 6 characters',
        serverError: errors.serverError
      });
    } else {
      setErrors({
        email: errors.email,
        password: '',
        serverError: errors.serverError
      });
    };
  };

  return (
    <Wrapper>
      { props.epicReducer.isLoading && <Loader /> }
      {
        !users.length
        ?
          <Card>
            <Headline>Log In</Headline>
            <Input
              placeholder="E-Mail"
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              onBlur={() => validateMail()}
            />

            {errors.email && <ErrorWrapper>{errors.email}</ErrorWrapper>}

            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              onBlur={() => validatePassword()}
            />

            {errors.password && <ErrorWrapper>{errors.password}</ErrorWrapper>}

            {props.epicReducer.error && <ErrorWrapper>{props.epicReducer.errorMessage}</ErrorWrapper>}

            <Button onClick={() => props.userLogin(email, password)}>
              Login
            </Button>
          </Card>
        :
        <Card>
          <Avatar src={users[0].avatar} />
          <Headline>
            {users[0].name}
          </Headline>
          <Button onClick={() => {
              props.userLogout();
              setEmail('');
              setPassword('');
            }}>
            Logout
          </Button>
        </Card>
      }
    </Wrapper>
  )
};

const mapStateToProps = (state: any) => ({ ...state });

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    userLogin,
    userLogout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);