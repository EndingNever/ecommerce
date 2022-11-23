import React from 'react'
import styles from './card.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'

export default function Card(props) {
  const vehicle = props.vehicle;
  const dispatch = useDispatch();
  const addToCart = cartActions.addItem;
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className={styles.cardContainer}>
      <div key={vehicle.id} className={styles.vehicleDisplay}>
        <h1>{vehicle.make} {vehicle.model}</h1>
        <p>Price: {"$"}{vehicle.price}</p>
        <div className={styles.imgContainer}>
          <img className={styles.carImage} src={vehicle.image} alt="" />
        </div>
      </div>
      <button onClick={() => handleAddToCart(vehicle)}>Add To Cart </button>
    </div>
  )
}
