import React, { useEffect, } from 'react'
import styles from './userCart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
//! Note: How to view size of localStorage: var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen; console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

export default function UserCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getCart = authActions.getCart;
  const getTotal = authActions.getTotal;
  const getItemCount = authActions.getItemCount;
  const createUserReceipt = authActions.createReceipt;
  const cartItems = useSelector((state) => state.auth.user.cartItems); // Array of items in the User Object Cart
  const itemCount = useSelector((state) => state.auth.user.itemCount); // # of Items in the User Object cart
  const cartTotal = useSelector((state) => state.auth.user.total); // $$$ Total 

  const handleReceipt = () => {
    dispatch(createUserReceipt());
    navigate('/login')
  }

  const getCartDetails = () => {
    dispatch(getCart());
    dispatch(getTotal());
    dispatch(getItemCount());
  }

  useEffect(() => {
    getCartDetails();
    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles.userCart}>
      {cartItems.length === 0 && //* Empty Cart
        <div>
          <h1>Your cart is empty, add items to your cart!</h1>
        </div>
      }
      {cartItems.length !== 0 &&
        <div className={styles.cartItemsContainer}>
          <div className={styles.itemCount}>
            <p>{itemCount} items in cart</p>
          </div>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div className={styles.itemMapContainer} key={item.id}>
                <img alt={`${item.make} ${item.model}`} src={item.image} />
                <p>{item.make} {item.model}</p>
                <p>${item.price.toLocaleString()}</p>
                <p>Quantity:{item.cartQuantity}</p>
              </div>
            ))}
          </div>
          {/* <div> */}
            <p>
              Your total is ${cartTotal?.toLocaleString()}
            </p>
            <button onClick={handleReceipt}>Checkout</button>
          {/* </div> */}
        </div>
      }
    </div>
  )
}

