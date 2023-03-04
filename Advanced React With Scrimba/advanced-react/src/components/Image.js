import {useState} from "react";
import { useContext } from "react";
import { Context } from "../Context";
import PropTypes from 'prop-types';


export default function Image({img,className}){
  const [hovered,setHovered]=useState(false)

  const {toggleFavorite,addCart,cart,delCart} = useContext(Context)

  function favorited(){
    if(img.isFavorite){
      return <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
    }else if (hovered){
      return <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
    }
  }

  function inCart(){
    const alreadyInCart= cart.some(item=> item.id === img.id) 
    if(alreadyInCart){
      return <i onClick={()=>delCart(img.id)} className="ri-shopping-cart-fill cart"></i>
    }else if (hovered){
      return <i onClick={()=>addCart(img.id)} className="ri-add-circle-line cart"></i>
    }
  }
  
  return(
    
    <div 
    onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}
    className={`${className} image-container`}
    >
      <img  src={img.url} className="image-grid"/>
      {favorited()}
      {inCart()}

    </div>

  )
}

Image.propTypes={
  className:PropTypes.string.isRequired,
  img:PropTypes.shape({
    url:PropTypes.string.isRequired
  })
}