// import { authActions, counterActions } from '../../store/index';
import { useState, useEffect } from 'react'
import styles from './Cars.module.css'
import { useDispatch } from 'react-redux'
import { vehicles } from '../../data/data';
import { cartActions } from '../../store/cart';
import Card from '../card/Card';

export default function Cars() {
  const dispatch = useDispatch();
  const [cars, setCars] = useState([])
  const addToCart = cartActions.addItem;
  const carFilter = vehicles.filter(vehicle => vehicle.type === 'car')

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    // const carFilter = vehicles.filter(vehicle => vehicle.type === 'car')
    // setCars(carFilter);
  }, [])


  return (
    <div className={styles.main}>
      {carFilter.map((car) => (
        <Card key={car.id} vehicle={car} />
      ))}
    </div>
  )
}
// !Login

//! Login

  // const counter = useSelector((state) => state.counter.counter);
  // const toggle = useSelector((state) => state.counter.showCounter);

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