import './App.css';
import { Routes, Route } from 'react-router-dom'
import Cars from './components/cars/Cars';
import Motorcycles from './components/motorcycles/Motorcycles';
import StickyNav from './components/stickyNav/StickyNav';
import MainDisplay from './pages/mainDisplay/MainDisplay';
import UserCart from './components/userCart/UserCart';

function App() {
  return (
    <div className='app'>
      <div className='appNav'>
        <StickyNav />
      </div>
      <div className='appDisplay'>
        <Routes >
          <Route path="/" element={<MainDisplay />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/motorcycles' element={<Motorcycles />} />
          <Route path='/cart' element={<UserCart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
