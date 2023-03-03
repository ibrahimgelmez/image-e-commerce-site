import React,{useState,useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}){
  const [allPhotos,setAllPhotos] = useState([])
  const [cart,setCart] = useState([])



  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(res=> res.json())
    .then(data=> setAllPhotos(data))
  },[])
  
  function toggleFavorite(id){
    const photos =  allPhotos.map(photo => {
     if (photo.id === id){ 
      return {
        ...photo,
        isFavorite: !photo.isFavorite
      }}else {
        return photo
      }   
     }
    )
      setAllPhotos(photos)
    }

  function addCart(id){
    const cart = allPhotos.map(photo => {
      if(id === photo.id){
        setCart(prevCart=> [...prevCart,photo])
      }
      
    })
  }

  console.log(cart)


  return(
    <Context.Provider value={{allPhotos,toggleFavorite,addCart,cart}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider , Context}