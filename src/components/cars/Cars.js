// import { authActions, counterActions } from '../../store/index';
import { useState, useEffect } from 'react'
import styles from './Cars.module.css'
import { useDispatch } from 'react-redux'
import { vehicles } from '../../data/data';
import { cartActions } from '../../store/cart';
import Card from '../card/Card';

export default function Cars() {
  const [cars, setCars] = useState([])
  const dispatch = useDispatch();
  const addToCart = cartActions.addItem;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    const carFilter = vehicles.filter(vehicle => vehicle.type === 'car')
    setCars(carFilter);
  }, [])


  return (
      <div className={styles.main}>
        {cars.map((car) => (
          <Card vehicle={car} />
          // <div className={styles.carCard} key={car.id}>
          //   <div className={styles.carInfo}>
          //     <p>{car.make}</p>
          //     <p>{car.model}</p>
          //   </div>
          //   <div className={styles.imageContainer}>
          //     <img src={car.image}></img>
          //   </div>
          //   <button onClick={() => handleAddToCart(car)}>Add Car</button>
          // </div>
        ))}
      </div>
  )
}
// !Login
    {/* <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      {isAuth && <div>AUTHORIZATION GRANTED. CONGRATULATIONS</div>}
      {toggle && <div> {counter} </div>}
    */}
//! Login

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