import React from 'react'
import styles from './Cars.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../../store/index';

export default function Cars() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter)

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

  return (
    <>
      <div>CARS go here</div>
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
