import React,{useContext} from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"
import Image from "../components/Image"
import { getClass } from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)

    const photosMap=allPhotos.map((photo,i)=>{
     return   <Image  img={photo} className={getClass(i)}/>
    })
    return (
        <main  className="photos">
           {photosMap}
        </main>
    )
}

export default Photos