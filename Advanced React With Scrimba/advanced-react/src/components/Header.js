import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header >
            <Link style={{textDecoration:"none",color:"white"}} to="/"><h2 >Pic Some</h2></Link>
            <Link style={{textDecoration:"none",color:"white"}}  to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
        </header>
    )
}

export default Header
