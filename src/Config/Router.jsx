import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Product_Details from '../components/Product_Details'

const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path='' element = {<Product_Details/>}/>
                <Route path='/product/:title' element={<Product_Details/>}/>

            </Route>
        )
    )
  return (
    <div>
      
    </div>
  )
}

export default Router
