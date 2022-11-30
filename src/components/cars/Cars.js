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

  return (
    <div className={styles.main}>
      {carFilter.map((car) => (
        <Card key={car.id} vehicle={car} />
      ))}
    </div>
  )
}