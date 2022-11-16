import React from 'react'
import styles from './Cars.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { authActions, counterActions } from '../../store/index';

export default function Cars() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.showCounter);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10} behind the scenes
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  }

  const loginHandler = (event) => {
    event.preventDefault()
    dispatch(authActions.login());
  }
  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <>
      <div>CARS go here</div>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      {isAuth && <div>AUTHORIZATION GRANTED. CONGRATULATIONS</div>}
      {toggle && <div> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </>
  )
}
