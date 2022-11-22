import React, { useEffect, useState } from 'react'
import styles from './Motorcycles.module.css'
import { vehicles } from '../../data/data'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'

export default function Motorcycles() {
  const [motorcycles, setMotorcycles] = useState([])
  const dispatch = useDispatch();
  const addToCart = cartActions.addItem;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    const motorcycleFilter = vehicles.filter((vehicle) => vehicle.type === 'motorcycle')
    setMotorcycles(motorcycleFilter);
  }, [])
  return (
    <div className={styles.allMotorcycles}>
      {motorcycles.map((motorcycle) => (
        <div className={styles.motorcycleCard} key={motorcycle.id}>
          <div className={styles.motorcycleInfo}>
            <p>{motorcycle.make}</p>
            <p>{motorcycle.model}</p>
          </div>
          <div className={styles.imageContainer}>
            <img src={motorcycle.image} alt="" />
          </div>
          <button onClick={() => handleAddToCart(motorcycle)}>Add Motorcycle</button>
        </div>
      ))}
    </div>
  )
}
