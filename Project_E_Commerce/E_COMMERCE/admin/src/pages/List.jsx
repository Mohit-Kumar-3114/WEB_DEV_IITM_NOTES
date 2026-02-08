import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import '../style/List.css'

const List = ({ token }) => {
  const [list, setList] = useState([])

  async function fetchProduct(){
     try {
        const response = await fetch(`${backendUrl}/api/v1/list-products`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
        })
        const result = await response.json()
        if(response.ok){
           console.log(result)
           setList(result.data)
        }
        else {
            toast.error(result.message)
        }
    }
    catch(error){
            console.log(error)
        }
  }


  async function removeProduct(productId){
    try{
      const response = await fetch(`${backendUrl}/api/v1/remove-product/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          }
      })
      const result = await response.json()
      if(response.ok){
        let listCopy = [...list]
        listCopy = listCopy.filter(item => item._id !== productId)
        setList(listCopy)
        toast.success(result.message)
      }
      else{
        toast.error(result.message)
      }     
  }
    catch(error){
      console.log(error)
    }
  }

  useEffect(function(){
     fetchProduct()
  },[])


  return (
    <>
      <div className="list-wrapper">
        <div className="list-header">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="center">Action</b>
        </div>
        
        {list?.length === 0 && (
          <p className='not-found'>
            No products found!
          </p>
        )}

        {list.map((item, index) => (
          <div className="list-row" key={index}>
          <img className="product-img" src={item.images[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p
              className="remove-btn"
              onClick={() => removeProduct(item._id)}
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default List