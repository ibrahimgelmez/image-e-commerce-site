import React,{useContext} from "react"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const {delCart} = useContext(Context)

    const [hovered,ref]= useHover()
    return (
        <div className="cart-item">
            <i
            ref={ref}
            onClick={()=>delCart(item.id)} 
            className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}/>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
            
        </div>
    )
}

export default CartItem