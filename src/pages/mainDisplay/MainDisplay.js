import React from 'react'
import styles from './mainDisplay.module.css'
import { vehicles } from '../../data/data'
import Card from '../../components/card/Card'
import { useState } from 'react'

export default function MainDisplay() {
  const [filterColor, setFilterColor] = useState('')
  let vehicleColors = [...new Set(vehicles.map((item) => (item.color)))];
  const vehicleFilter = vehicles.filter((vehicle) => filterColor === '' ? vehicle.color !== filterColor : vehicle.color === filterColor)

  const handleChange = (e) => {
    setFilterColor(e.target.value)
  }

  return (
    <>
      <div>
        {/* <p> Sorty by: */}
        <select name='color' id='color' onChange={handleChange}>
          <option value=''>All</option>
          {vehicleColors.map((item) => (
            <option value={item} >
              {item.charAt(0).toUpperCase().concat(item.slice(1))} {/* Capitalizes first letter, concats the rest of the word  */}
            </option>
          )
          )}
        </select>
      </div>
      <div className={styles.main}>
        {vehicleFilter.map((vehicle) => (
          <Card key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </>
  )
}
