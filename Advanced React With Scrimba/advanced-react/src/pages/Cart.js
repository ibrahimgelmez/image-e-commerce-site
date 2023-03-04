import React, { useState } from "react"
import { useContext } from "react"
import CartItems from "../components/cartItems"
import { Context } from "../Context"

function Cart() {
    const {cart,setCart} = useContext(Context)
    const cartItems=cart.map(cart => <CartItems key={cart.id} item={cart}/>)

    const[orderBtn,setOrderBtn]= useState("Place Order")

    function totalCost(){
        return 5.99 * cart.length
    }

    function placeOrder(){
        setOrderBtn("Ordering...")
        setTimeout(()=>setOrderBtn("Place Order"),2500)
        setTimeout(()=>console.log("Succesfully ordered."),2500)
        setTimeout((()=>setCart([])),2500)
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItems}
            <h3 className="total-cost">Total cost : {totalCost().toLocaleString("en-US", {style: "currency", currency: "USD"})} </h3>
            <div className="order-button">
                <button onClick={placeOrder}>{orderBtn}</button>
            </div>

        </main>
    )
}

export default Cart