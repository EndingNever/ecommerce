import React, { useEffect, useState } from 'react'
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
    <>
      <div>MOTORCYCLES go here</div>
      <div>{motorcycles.map((motorcycle) => (
        <div key={motorcycle.id}>
          <p>{motorcycle.make}</p>
          <p>{motorcycle.model}</p>
          <img src={motorcycle.image} alt="" />
          <button onClick={() => handleAddToCart(motorcycle)}>Add Motorcycle</button>
        </div>
      ))}</div>
    </>
  )
}
