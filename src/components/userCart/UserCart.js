import React, { useEffect,  } from 'react'
import styles from './userCart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/auth';
import { Link } from 'react-router-dom';
// import Card from '../card/Card';


//! Note: How to view size of localStorage: var _lsTotal=0,_xLen,_x;for(_x in localStorage){ if(!localStorage.hasOwnProperty(_x)){continue;} _xLen= ((localStorage[_x].length + _x.length)* 2);_lsTotal+=_xLen; console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB")};console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
//TODO get item quantity totals to persist
//TODO Checkout screen
//TODO Favorites list
//TODO Remove item from cart

export default function UserCart() {
  const dispatch = useDispatch();
  const getCart = authActions.getCart;
  const getTotal = authActions.getTotal;
  const getItemCount = authActions.getItemCount;
  const createUserReceipt = authActions.createReceipt;
  const cartItems = useSelector((state) => state.auth.user.cartItems); // Array of items in the User Object Cart
  const itemCount = useSelector((state) => state.auth.user.itemCount); // # of Items in the User Object cart
  const cartTotal = useSelector((state) => state.auth.user.total); // $$$ Total 

  const handleReceipt = () => {
    dispatch(createUserReceipt());
  }
  
  useEffect(() => {
    dispatch(getCart());
    dispatch(getTotal());
    dispatch(getItemCount());
  }, [])

  // useEffect(() => {
  //   setCart({
  //     items: cartItems,
  //     numOfItems: itemCount,
  //     total: cartTotal
  //   })
  // }, [cartItems, itemCount, cartTotal])

  return (
    <div className={styles.userCart}>
      {cartItems.length === 0 && //* Empty Cart
        <div>
          <h1>Your cart is empty, add items to your cart!</h1>
        </div>
      }
      {cartItems.length !== 0 &&
        // <>
        //   <div className={styles.box1}>
        //     <p>test</p>
        //     <div className={styles.box2}>
        //       <p>test 2</p>
        //       <p>test 2</p>
        //       <p>test 2</p>
        //     </div>
        //   </div>
        // </>
        <div className={styles.cartItemsContainer}>
          <div className={styles.itemCount}>
            <p>{itemCount} items in cart</p>
          </div>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div className={styles.itemMapContainer} key={item.id}>
                <img src={item.image} />
                <p>{item.make} {item.model}</p>
                <p>${item.price.toLocaleString()}</p>
                <p>Quantity:{item.cartQuantity}</p>
                {/* <Card vehicle={item} /> */}
              </div>
            ))}
          </div>
          <div>
            <p>
              Your total is ${cartTotal?.toLocaleString()}
            </p>
            {/* <button ><Link to='/checkout'>Checkout</Link></button>  */}
            {/*TODO - Make a checkout page that displays all of the items purchased, as well as a receipt number */}
            {/*TODO The items purchased page will conntain all of the items, the total price, and a receipt number */}
            {/*The receipt will have a receipt number, will contain all of the items purchased, and allows for the user to return an item by selecting it*/}
            {/* The receipt can be attached to the user object, will contain the same cartItems, and will have a receipt number */}
            {/* The receipt will be an object on the user, we need to dispatch on check out a function that will add the receipt to the user object */}
            {/* The receipt number */}
            {/*  */}
            {/*  */}
            <button onClick={handleReceipt}>Checkout</button>
          </div>
        </div>
      }
    </div>
  )
}

