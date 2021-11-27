import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';
import CustomLoader from '../components/CustomLoader';

const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login(email, password));
    } else {
      toast.error('Please fill all fields!');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  return (
    <>
      <FormContainer>
        <i className="fas fa-key"></i>
        <div>
          <h2>Welcome Back!</h2>
          <p>Login with email and password</p>
        </div>
        {loading && loading ? (
          <CustomLoader type="Oval" width={20} height={20} />
        ) : (
          <Form onSubmit={submitHandler}>
            <FormControl>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
              />
            </FormControl>

            <FormControl>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
              />
            </FormControl>

            <Button type="submit">Login Now</Button>
          </Form>
        )}
        <i className="fas fa-question"></i>
        Not an account?{' '}
        <Link to={redirect ? `/register/redirect=${redirect}` : '/register'}>Signup here</Link>{' '}
        instead.
      </FormContainer>
    </>
  );
};

export default LoginScreen;
