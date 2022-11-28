import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

export default function LoginAuth() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const login = authActions.login;
  const logout = authActions.logout;

  const loginHandler = () => {
    dispatch(login())
  }
  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <div>
      <div>
        <h3>Register User</h3>
        <input type="text" placeholder='Email...' />
        <input type='password' placeholder='Password...' />
      </div>
      <div>
        <h3> Login </h3>
        <input type="text" placeholder='Email...' />
        <input type='password' placeholder='Password...' />
        <button onClick={loginHandler}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
      </div>
      {isAuth && <div>AUTHORIZATION GRANTED. CONGRATULATIONS</div>}
    </div>

  )
}
