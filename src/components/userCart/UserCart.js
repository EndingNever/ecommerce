import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/Card';

export default function UserCart() {
  const dispatch = useDispatch();
  const [cart, setCart] = useState({ items: [], numOfItems: 0, total: 0 });
  const cartItems = useSelector((state) => state.cart.cartItems); // Array of items in the cart
  const itemCount = useSelector((state) => state.cart.itemCount); // # of Items in the cart
  const cartTotal = useSelector((state) => state.cart.total); // Total in $ 

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
            <>
              <Card vehicle={item} />
              <p>Quantity:{item.cartQuantity}</p>
            </>
            // <div key={item.id}>
            //   <p>{item.model}</p>
            //   <img src={item.image}></img>
            //   <p>Quantity: {item.cartQuantity}</p>
            // </div>
          ))}
        </div>
      }
      <p>
        Your total is ${cart.total}
      </p>
    </div>
  )
}

