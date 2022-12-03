import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/auth';
import Card from '../card/Card';


//! Note: How to view size of localStorage: var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen; console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

export default function UserCart() {
  const dispatch = useDispatch();
  const [cart, setCart] = useState({});
  const getCart = authActions.getCart;
  const cartItems = useSelector((state) => state.auth.user.cartItems); // Array of items in the User Object Cart
  const itemCount = useSelector((state) => state.auth.user.itemCount); // # of Items in the User Object cart
  const cartTotal = useSelector((state) => state.auth.user.total); // $$$ Total 
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

  useEffect(() => {
    dispatch(getCart());
  }, [])

  console.log(cartItems)
  
  // useEffect(() => {
  //   setCart({
  //     items: cartItems,
  //     numOfItems: itemCount,
  //     total: cartTotal
  //   })
  // }, [cartItems, itemCount, cartTotal])

  return (
    <div>
      User Cart
      {cartItems.length === 0 && //* Empty Cart
        <div>
          <h1>Your cart is empty, add items to your cart!</h1>
        </div>
      }
      {cartItems.length !== 0 &&
        <div>
          {itemCount} items in cart
          {cartItems.map((item) => (
            <Fragment key={item.id}>
              <Card vehicle={item} />
              <p>Quantity:{item.cartQuantity}</p>
            </Fragment>
          ))}
        </div>
      }
      <p>
        Your total is ${cartTotal}
      </p>
    </div>
  )
}

