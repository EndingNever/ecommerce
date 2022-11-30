import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from './login.module.css'
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { authActions } from '../../store/auth';
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
  const stateUser = useSelector((state) => state.auth.user)
  const stateToken = useSelector((state) => state.auth.user.token)
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const setStateUserToken = authActions.setUserToken;
  const login = authActions.login;
  const logout = authActions.logout;
  //! Redux Login

  const firebaseRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const token = user._tokenResponse.localId
      dispatch(setStateUserToken(token));
      dispatch(login());
      navigate('/',{ replace: true })
    } catch (error) {
      console.log(error.message);
    }
  };

  const firebaseLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const token = user._tokenResponse.localId
      dispatch(setStateUserToken(token));
      // dispatch(login());
      navigate("/", { replace: true })
    } catch (error) {
      console.log(error.message);
    }
  };

  const firebaseLogout = async () => {
    await signOut(auth);
    dispatch(logout());
    navigate('/', { replace: true })
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [user]);

  return (
    <div className={styles.loginPage}>
      {isAuth == false &&
        <>
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
          </div>
        </>}
      {isAuth == true &&
        <>
          <h4>User Logged In: {user?.email}</h4>
          <button onClick={firebaseLogout}>Sign Out</button>
          {isAuth === true && <div>AUTHORIZATION GRANTED. CONGRATULATIONS</div>}
          {'Token: ' + stateToken}
        </>
      }
    </div>

  )
}
