import camry from '../images/vehicles/camrytrd.webp'
import audi from '../images/vehicles/quattro.jpg'
import bmw from '../images/vehicles/bmw.png'
import klr from '../images/vehicles/klr.jpg'
import nsx from '../images/vehicles/acuraNSX.jpg'
import t100 from '../images/vehicles/t100.jpg'
import kaneda from '../images/vehicles/kaneda.jpg'
import catbus from '../images/vehicles/catbus.jpg'

export const vehicles = [
  {
    id: 0,
    type: 'car',
    make: 'Audi',
    model: 'Sport Quattro',
    price: 20000,
    image: audi,
    color: 'red',
  },
  {
    id: 1,
    type: 'car',
    make: 'Toyota',
    model: 'Camry',
    price: 30000,
    image: camry,
    color: 'red',
  },
  {
    id: 2,
    type: 'motorcycle',
    make: 'BMW',
    model: 'R1200GS',
    price: 10000,
    image: bmw,
    color: 'blue',
  },
  {
    id: 3,
    type: 'motorcycle',
    make: 'Kawasaki',
    model: 'KLR650',
    price: 10000,
    image: klr,
    color: 'black',
  },
  {
    id: 4,
    type: 'car',
    make: 'Acura',
    model: 'NSX',
    price: 120000,
    image: nsx,
    color: 'black',
  },
  {
    id: 5,
    type: 'motorcycle',
    make: 'Triumph',
    model: 'Bonneville',
    price: 10000,
    image: t100,
    color: 'brown',
  },
  {
    id: 6,
    type: 'motorcycle',
    make: "Kaneda's",
    model: "Motorcycle",
    price: 60000,
    image: kaneda,
    color: 'red',
  },
  {
    id: 7,
    type: 'car',
    make: "Studio Ghibli",
    model: "CatBus",
    price: 75000,
    image: catbus,
    color: 'CATBUS',
  }
];