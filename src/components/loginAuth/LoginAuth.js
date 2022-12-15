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
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const setStateUserToken = authActions.setUserToken;
  const login = authActions.login;
  const logout = authActions.logout;
  //! Redux user receipts
  const userReceipt = useSelector((state) => state.auth.user.receipts)

  const firebaseRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const token = user._tokenResponse.localId
      dispatch(setStateUserToken(token));
      dispatch(login());
      navigate('/', { replace: true })
    } catch (error) {
      console.log(error.message);
    }
  };

  const firebaseLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const token = user._tokenResponse.localId
      dispatch(setStateUserToken(token));
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
      {isAuth === false &&
        <>
          {/* <div>
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
          </div> */}
          <div className={styles.loginContainer}>
            <div className={styles.loginHeader}>
              <h3> Login </h3>
            </div>
            <div className={styles.loginInputs}>
              <input placeholder='Email...'
                onChange={(event) => setLoginEmail(event.target.value)}
              />
              <input placeholder='Password...'
                type='password'
                onChange={(event) => setLoginPassword(event.target.value)}
              />
              <button onClick={firebaseLogin}>Login</button>
            </div>
          </div>
        </>}
      {isAuth === true &&
        <div className={styles.loggedIn}>
          <h4>User Email: {user?.email}</h4>
          <button onClick={firebaseLogout}>Sign Out</button>
          {userReceipt !== null &&
            Object.keys(userReceipt).map((key) => (
              <div className={styles.receiptContainer}>
                <h2>Receipt {key}:</h2>
                {userReceipt[key].total}
                {userReceipt[key].map((item) => (
                  <div className={styles.receiptInfo}>
                    <img alt={`${item.make} ${item.model}`} src={item.image} />
                    <p>{item.make} {item.model} ${item.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            ))
          }
        </div>
      }
    </div>

  )
}
