import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

export default function LoginAuth() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const login = authActions.login;
  const logout = authActions.logout;

  const loginHandler = () => {
    login();
  }
  const logoutHandler = () => {
    logout();
  }

  return (
    <div>
      LoginAuth
      <button onClick={() => loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      {isAuth && <div>AUTHORIZATION GRANTED. CONGRATULATIONS</div>}
    </div>

  )
}
