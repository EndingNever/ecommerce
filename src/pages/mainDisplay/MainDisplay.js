import React, { useEffect, useState } from 'react'
import styles from './mainDisplay.module.css'
import { vehicles } from '../../data/data'

export default function MainDisplay() {
  const [carList, setCarList] = useState()

  useEffect(() => {
    setCarList(vehicles)
  }, [carList, vehicles])



  return (
    <div className={styles.main}>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className={styles.vehicleDisplay}>
          <h1>{vehicle.make} {vehicle.model}</h1>
          <img className={styles.carImage} src={vehicle.image} alt="" />
        </div>
      ))}
    </div>
  )
}
