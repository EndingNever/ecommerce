import styles from './Cars.module.css'
import { vehicles } from '../../data/data';
import Card from '../card/Card';

export default function Cars() {
  const carFilter = vehicles.filter(vehicle => vehicle.type === 'car')

  return (
    <div className={styles.main}>
      {carFilter.map((car) => (
        <Card key={car.id} vehicle={car} />
      ))}
    </div>
  )
}