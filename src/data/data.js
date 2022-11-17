import camry from '../images/vehicles/camry.jpg'
import audi from '../images/vehicles/quattro.jpg'
import bmw from '../images/vehicles/bmw.png'
import klr from '../images/vehicles/klr.jpg'

export const vehicles = [
  {
    id: 0,
    type: 'car',
    make: 'Audi',
    model: 'Sport Quattro',
    price: 20000,
    image: audi,
  },
  {
    id: 1,
    type: 'car',
    make: 'Toyota',
    model: 'Camry',
    price: 40000,
    image: camry,
  },
  {
    id: 2,
    type: 'motorcycle',
    make: 'BMW',
    model: 'R1200GS',
    price: 10000,
    image: bmw,
  },
  {
    id: 3,
    type: 'motorcycle',
    make: 'Kawasaki',
    model: 'KLR650',
    price: 10000,
    image: klr,
  },
];