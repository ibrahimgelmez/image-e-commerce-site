import React,{useContext} from "react"
import { Context } from "./Context"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//redux
import { useSelector, useDispatch } from 'react-redux'
import {decrement,increment} from "./redux/count"

function App() {  
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <div>
        <Header/>
        <Photos />
      </div>
    },{
      path: "cart",
      element: 
      <div>
        <Header/>
        <Cart />
      </div>
    } 
  ]);

  const count= useSelector((state)=> state.counter.value)
  const dispatch=useDispatch()

    return (
        <div>
            
            <RouterProvider router={router} />
            
        </div>
    )
}

export default App