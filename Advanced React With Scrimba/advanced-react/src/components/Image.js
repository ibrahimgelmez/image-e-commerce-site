import {useState} from "react";

export default function Image({img,className}){
  const [hovered,setHovered]=useState(false)
  return(
    
    <div 
    onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}
    className={`${className} image-container`}>
      <img  src={img.url} className="image-grid"/>
      {hovered && <i className="ri-heart-line favorite"></i>}
      {hovered && <i className="ri-add-circle-line cart"></i>}

    </div>

  )
}