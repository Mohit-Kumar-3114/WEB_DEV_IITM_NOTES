import { createContext } from 'react'
import { useEffect } from 'react';

export const ShopContext = createContext()
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"

const backendUrl = import.meta.env.VITE_BACKEND_URL

export default function ShopContextProvider({ children }) {
    const [products, setProducts] = useState([])
    const currency = "₹";
    const delivery_fee = 10;
    const navigate = useNavigate();
    const [ search, setSearch ] = useState("");
    const [ showSearch, setShowSearch ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]) 

    function addToCart(productId, size){
        if(!size){
            toast.error("Product size is not selected")
            return
        }

        let cartData = [...cartItems]
        const index = cartData.findIndex(item => item.productId === productId && item.size === size)
        
        if(index !== -1){
            cartData[index] = { ...cartData[index], quantity: cartData[index].quantity + 1}
        }
        else {
            cartData.push({productId, size, quantity: 1})
        }
        setCartItems(cartData) 
    }


    function getCartCount(){
        let totalCount = 0

        for (let i = 0; i < cartItems.length; i++) {
        totalCount += cartItems[i].quantity
        }

        return totalCount
    }


    function updateQuantity(productId, size, quantity){
        if(quantity < 0){
            return
        }

        let cartCopy = [...cartItems]
        const index = cartCopy.findIndex(item => item.productId === productId && item.size === size)

        if(index !== -1){
            if(quantity > 0) {
              cartCopy[index] = { ...cartCopy[index], quantity: quantity }
            } 
            else cartCopy.splice(index, 1)
        }

        setCartItems(cartCopy)
    }


    function getCartAmount() {
        let totalAmount = 0

        cartItems.forEach((cartItem) => {
        const product = products.find((p) => p._id === cartItem.productId)

        if (product) {
            totalAmount += product.price * cartItem.quantity
        }
        })

        return totalAmount
    }

      async function fetchProducts(){
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
               setProducts(result.data) 
            }
            else {
               toast.error(result.message)
            }
        }
        catch(error){
                console.log(error)
            }
      }
      useEffect(()=>{
        fetchProducts()
      },[])

    const value = { currency, delivery_fee, products, navigate, search, showSearch, setSearch, setShowSearch, addToCart, getCartCount, cartItems, updateQuantity, getCartAmount};

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}