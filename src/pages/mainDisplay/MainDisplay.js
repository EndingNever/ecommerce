import React, { useEffect, useState } from 'react'
import styles from './mainDisplay.module.css'
import { cars, motorcycles } from '../../data/data'

export default function MainDisplay() {
  const [carList, setCarList] = useState()

  useEffect(() => {
    setCarList(cars)
  }, [cars])



  return (
    <div className={styles.main}>
      {cars.map((car) => (
        <>
          <h1>{car.name}</h1>
          <img className='carImage' src={car.image} alt="" />
        </>
      ))}
    </div>
  )
}
