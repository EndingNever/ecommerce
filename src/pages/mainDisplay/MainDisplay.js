import React from 'react'
import styles from './mainDisplay.module.css'
import { vehicles } from '../../data/data'
import Card from '../../components/card/Card'
import { useState } from 'react'
import Filter from '../../components/filter/Filter'

export default function MainDisplay() {
  const [filterColor, setFilterColor] = useState('')
  let vehicleColors = [...new Set(vehicles.map((item) => (item.color)))];
  const vehicleFilter = vehicles.filter((vehicle) => filterColor === '' ? vehicle.color !== filterColor : vehicle.color === filterColor)

  const handleChange = (e) => {
    setFilterColor(e.target.value)
  }

  return (
    <>
      <Filter vehicles={vehicleFilter} />
    </>
  )
}
