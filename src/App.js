// import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Cars from './components/cars/Cars';
import Motorcycles from './components/motorcycles/Motorcycles';
import StickyNav from './components/stickyNav/StickyNav';
import MainDisplay from './pages/mainDisplay/MainDisplay';
import UserCart from './components/userCart/UserCart';
import LoginAuth from './components/loginAuth/LoginAuth';
import Checkout from './components/checkout/Checkout';

function App() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const isAuth = useSelector((state) => state.auth.isAuthenticated)
  // const userToken = useSelector((state) => state.auth.user.token)
  // const login = authActions.login

  // useEffect(() => {
  //    dispatch(login());
  // }, [])
  
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
          <Route path='/login' element={<LoginAuth />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
