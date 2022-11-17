// import { authActions, counterActions } from '../../store/index';
import { useState, useEffect } from 'react'
import styles from './Cars.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../../store/counter';
import { authActions } from '../../store/auth';
import { vehicles } from '../../data/data';
import { cartActions } from '../../store/shoppingCart';

export default function Cars() {
  const addToCart = cartActions.addItem;
  const printCart = cartActions.printCart;
  const dispatch = useDispatch();
  const [cars, setCars] = useState([])

  const handleAddToCart = (product) => {
    dispatch(cartActions.addItem(product))
  }

  useEffect(() => {
    const carFilter = vehicles.filter(vehicle => vehicle.type === 'car')
    setCars(carFilter);
    // cartActions.addItem('ringo');
    dispatch(cartActions.printCart());

  }, [])


  return (
    <>
      <div>CARS go here</div>
      <div>{cars.map((car) => (
        <div key={car.id}>
          <p>{car.make}</p>
          <p>{car.model}</p>
          <button onClick={() => handleAddToCart(car)}>Add Car</button>
        </div>
      ))}</div>
      {/* <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      {isAuth && <div>AUTHORIZATION GRANTED. CONGRATULATIONS</div>}
      {toggle && <div> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div> */}
    </>
  )
}



  // const counter = useSelector((state) => state.counter.counter);
  // const toggle = useSelector((state) => state.counter.showCounter);
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // const incrementHandler = () => {
  //   dispatch(counterActions.increment());
  // }
  // const decrementHandler = () => {
  //   dispatch(counterActions.decrement());
  // }
  // const increaseHandler = () => {
  //   dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10} behind the scenes
  // }
  // const toggleCounterHandler = () => {
  //   dispatch(counterActions.toggleCounter());
  // }
  // const loginHandler = (event) => {
  //   event.preventDefault()
  //   dispatch(authActions.login());
  // }
  // const logoutHandler = () => {
  //   dispatch(authActions.logout())
  // }