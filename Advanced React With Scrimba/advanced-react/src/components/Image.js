import {useState} from "react";
import { useContext } from "react";
import { Context } from "../Context";
import PropTypes from 'prop-types';


export default function Image({img,className}){
  const [hovered,setHovered]=useState(false)

  const {toggleFavorite,addCart} = useContext(Context)
  console.log(img.isFavorite)

  function favorited(){
    if(img.isFavorite){
      return <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
    }else if (hovered){
      return <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
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
      {hovered && <i onClick={()=>addCart(img.id)} className="ri-add-circle-line cart"></i>}

    </div>

  )
}

Image.propTypes={
  className:PropTypes.string.isRequired,
  img:PropTypes.shape({
    url:PropTypes.string.isRequired
  })
}