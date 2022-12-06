import React from 'react'
import styles from './card.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart'
import { Link } from 'react-router-dom';
import { authActions } from '../../store/auth';

export default function Card(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated)
  const vehicle = props.vehicle;
  const addToUserCart = authActions.addItem;

  const handleAddToCart = (product) => {
    dispatch(addToUserCart(product))
  }

  return (
    <div key={vehicle.id} className={styles.cardContainer}>
      <div className={styles.vehicleDisplay}>
        <h1>{vehicle.make} {vehicle.model}</h1>
        <p>Price: {"$"}{vehicle.price.toLocaleString()}</p>
        <div className={styles.imgContainer}>
          <img className={styles.carImage} src={vehicle.image} alt="" />
        </div>
      </div>
      {!auth && <button><Link to='/login'>Add To Cart</Link> </button>}
      {auth && <button onClick={() => handleAddToCart(vehicle)}>Add To Cart </button>}

    </div>
  )
}
