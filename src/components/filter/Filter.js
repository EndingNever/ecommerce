import React, { useState } from 'react'
import Card from '../card/Card';
import styles from './Filter.module.css'

export default function Filter(props) {
  const vehicles = props.vehicles
  const [filterColor, setFilterColor] = useState('')
  let vehicleColors = [...new Set(vehicles.map((item) => (item.color)))];
  const vehicleFilter = vehicles.filter((vehicle) => filterColor === '' ? vehicle.color !== filterColor : vehicle.color === filterColor)

  const handleChange = (e) => {
    setFilterColor(e.target.value)
  }

  return (
    <>
      <div>
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
      <div className={styles.filterMain}>
        {vehicleFilter.map((vehicle) => (
          <Card key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </>
  )
}
