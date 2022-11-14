import './App.css';
import { Routes, Route } from 'react-router-dom'
import Cars from './components/cars/Cars';
import Motorcycles from './components/motorcycles/Motorcycles';
import StickyNav from './components/stickyNav/StickyNav';
import MainDisplay from './pages/mainDisplay/MainDisplay';

function App() {
  return (
    <div >
      <StickyNav />
      <Routes>
        <Route path="/"  element={<MainDisplay />}/>
        <Route path='/cars' element={<Cars />} />
        <Route path='/motorcycles' element= {<Motorcycles/>} />
      </Routes>
    </div>
  );
}

export default App;
