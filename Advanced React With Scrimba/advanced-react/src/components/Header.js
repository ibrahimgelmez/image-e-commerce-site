import React,{ useContext } from "react"
import {Link} from "react-router-dom"
import { Context } from "../Context"

function Header() {
    const {cart}=useContext(Context)
    return (
        <header >
            <Link style={{textDecoration:"none",color:"white"}} to="/"><h2 >Pic Some</h2></Link>
            <Link style={{textDecoration:"none",color:"white"}}  to="/cart"><i className={cart.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x":"ri-shopping-cart-line ri-fw ri-2x"}></i></Link>
        </header>
    )
}

export default Header
