import { vehicles } from '../../data/data';
import Filter from '../filter/Filter';

export default function Cars() {
  const carFilter = vehicles.filter(vehicle => vehicle.type === 'car')

  return (
      <Filter vehicles={carFilter} />
  )
}