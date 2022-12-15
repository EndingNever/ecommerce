import React from 'react'
import { vehicles } from '../../data/data'
import Filter from '../../components/filter/Filter'

export default function MainDisplay() {

  return (
    <>
      <Filter vehicles={vehicles} />
    </>
  )
}
