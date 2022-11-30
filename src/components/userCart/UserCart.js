import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/Card';

export default function UserCart() {
  // const dispatch = useDispatch();
  const [cart, setCart] = useState({ items: [], numOfItems: 0, total: 0 });
  const cartItems = useSelector((state) => state.auth.user.cartItems); // Array of items in the User Object Cart
  const itemCount = useSelector((state) => state.auth.user.itemCount); // # of Items in the User Object cart
  const cartTotal = useSelector((state) => state.auth.user.total); // $$$ Total 

  useEffect(() => {
    setCart({
      items: cartItems,
      numOfItems: itemCount,
      total: cartTotal
    })
  }, [cartItems, itemCount, cartTotal])

  return (
    <div>
      User Cart
      {cart.numOfItems === 0 && //* Empty Cart
        <div>
          <h1>Your cart is empty, add items to your cart!</h1>
        </div>
      }
      {cart.numOfItems !== 0 &&
        <div>
          {cart.numOfItems} items in cart
          {cart.items.map((item) => (
            <Fragment key={item.id}>
              <Card vehicle={item} />
              <p>Quantity:{item.cartQuantity}</p>
            </Fragment>
          ))}
        </div>
      }
      <p>
        Your total is ${cart.total}
      </p>
    </div>
  )
}

