import React, { useEffect, useState } from 'react'
import styles from './mainDisplay.module.css'
import { vehicles } from '../../data/data'
import Card from '../../components/card/Card'

export default function MainDisplay() {
  const [carList, setCarList] = useState()

  useEffect(() => {
    setCarList(vehicles)
  }, [])

  return (
    <div className={styles.main}>
      {vehicles.map((vehicle) => (
        <Card key={vehicle.id} vehicle={vehicle} id={vehicle.id} make={vehicle.make} model={vehicle.model} image={vehicle.image} />
      ))}
    </div>
  )
}
