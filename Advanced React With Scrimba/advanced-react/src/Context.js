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

  function delCart(id){
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  return(
    <Context.Provider value={{allPhotos,toggleFavorite,addCart,delCart,cart,setCart}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider , Context}