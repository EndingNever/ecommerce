import camry from '../images/vehicles/camry.jpg'
import audi from '../images/vehicles/quattro.jpg'
import bmw from '../images/vehicles/bmw.png'
import klr from '../images/vehicles/klr.jpg'
import nsx from '../images/vehicles/acuraNSX.jpg'
import t100 from '../images/vehicles/t100.jpg'

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
  {
    id: 4,
    type: 'car',
    make: 'Acura',
    model: 'NSX',
    price: 120000,
    image: nsx,
  },
  {
    id: 5,
    type: 'motorcycle',
    make: 'Triumph',
    model: 'Bonneville',
    price: 10000,
    image: t100,
  }
];