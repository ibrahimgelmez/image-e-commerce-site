import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { increment,decrement } from "../redux/count"

function Cart() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch= useDispatch()
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            <hr/>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>

        </main>
    )
}

export default Cart