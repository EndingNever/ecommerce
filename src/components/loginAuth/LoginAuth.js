import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom';

export default function LoginAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //* Email,password, user for logging in with Firebase
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  //*

  //! Redux Login
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const login = authActions.login;
  const logout = authActions.logout;
  //! Redux Login

  const firebaseRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const firebaseLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      authActions.setUser(user);
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  };

  const firebaseLogout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    if (user === null) {
      dispatch(logout());
    } else if (user !== null) {
      dispatch(login());
    }
    console.log(isAuth);
  }, [user]);

  return (
    <div className={styles.loginPage}>
      {!isAuth && <>
        <div>
          <h3>Register User</h3>
          <input
            type="text"
            placeholder='Email...'
            onChange={(event) => { setRegisterEmail(event.target.value) }}
          />
          <input
            type='password'
            minLength='6'
            placeholder='Password...'
            onChange={(event) => { setRegisterPassword(event.target.value) }}
          />
          <button onClick={firebaseRegister}>Create User</button>
        </div>
        <div>
          <h3> Login </h3>
          <input placeholder='Email...'
            onChange={(event) => setLoginEmail(event.target.value)}
          />
          <input placeholder='Password...'
            onChange={(event) => setLoginPassword(event.target.value)}
          />
          <button onClick={firebaseLogin}>Login</button>
          {/* <button onClick={loginHandler}>Login</button>
        <button onClick={logoutHandler}>Logout</button> */}
        </div>
      </>}
      <h4>User Logged In: {user?.email}</h4>
      <button onClick={firebaseLogout}>Sign Out</button>
      {isAuth === true && <div>AUTHORIZATION GRANTED. CONGRATULATIONS</div>}
    </div>

  )
}
