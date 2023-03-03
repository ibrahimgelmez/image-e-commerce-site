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
      element: <Photos />
    },{
      path: "cart",
      element: <Cart />
    } 
  ]);

  const count= useSelector((state)=> state.counter.value)
  const dispatch=useDispatch()

    return (
        <div>
            <Header />
            <RouterProvider router={router} />
            
        </div>
    )
}

export default App