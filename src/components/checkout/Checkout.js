import React from 'react'
import styles from './Checkout.module.css'
import { authActions } from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux';

export default function Checkout() {
  const dispatch = useDispatch();
  const getCart = authActions.getCart;
  const cartItems = useSelector((state) => state.auth.user.cartItems); // Array of items in the User Object Cart

  // console.log(cartItems);
  return (
    <div>Checkout</div>
  )
}
