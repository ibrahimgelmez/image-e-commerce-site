import {useState} from "react";
import { useContext } from "react";
import { Context } from "../Context";
import PropTypes from 'prop-types';
import useHover from "../hooks/useHover";


export default function Image({img,className}){
  const {toggleFavorite,addCart,cart,delCart} = useContext(Context)

  const [hovered,ref] = useHover()

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
    ref={ref}
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