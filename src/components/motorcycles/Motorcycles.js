import { vehicles } from '../../data/data'
import Filter from '../filter/Filter'

export default function Motorcycles() {
  const motorcycleFilter = vehicles.filter((vehicle) => vehicle.type === 'motorcycle')

  return (
      <Filter vehicles={motorcycleFilter} />
  )
}
