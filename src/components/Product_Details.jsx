import React from 'react'
import { useParams } from 'react-router-dom'
import { products_data } from '../utils/products_data'

const Product_Details = () => {
    const params = useParams()
    const data = products_data.filter(()=>{
        return pro.title == params.title
    })
  return (
    <div>
      
    </div>
  )
}

export default Product_Details

