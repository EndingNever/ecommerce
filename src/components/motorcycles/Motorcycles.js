import React, { useEffect, useState } from 'react'
import styles from './Motorcycles.module.css'
import { vehicles } from '../../data/data'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'
import Card from '../card/Card'

export default function Motorcycles() {
  const [motorcycles, setMotorcycles] = useState([])
  const dispatch = useDispatch();
  const addToCart = cartActions.addItem;
  const motorcycleFilter = vehicles.filter((vehicle) => vehicle.type === 'motorcycle')

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    const motorcycleFilter = vehicles.filter((vehicle) => vehicle.type === 'motorcycle')
    setMotorcycles(motorcycleFilter);
  }, [])
  return (
    <div className={styles.main}>
      {motorcycleFilter.map((motorcycle) => (
        <Card key={motorcycle.id} vehicle={motorcycle} />
      ))}
    </div>
  )
}
