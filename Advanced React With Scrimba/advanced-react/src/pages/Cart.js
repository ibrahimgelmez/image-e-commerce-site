import React from "react"
import { useContext } from "react"
import { Context } from "../Context"

function Cart() {
    const {cart} = useContext(Context)
    const cartItems=cart.map(cart=> <img src={cart.url} ></img>)
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItems}

        </main>
    )
}

export default Cart