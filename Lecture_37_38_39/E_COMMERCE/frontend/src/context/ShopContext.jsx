import { createContext } from 'react'

export const ShopContext = createContext()
import { products } from '../assets/assets';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"


export default function ShopContextProvider({ children }) {
    const currency = "₹";
    const delivery_fee = 10;
    const navigate = useNavigate();
    const [ search, setSearch ] = useState("");
    const [ showSearch, setShowSearch ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]) // productId, size, quantity

    function addToCart(productId, size){
        if(!size){
            toast.error("Product size is not selected")
        }

        let cartData = [...cartItems]
        const index = cartData.findIndex(item => item.productId === productId && item.size === size)
        
        if(index !== -1){
            cartData[index] = { ...cartData[index], quantity: cartData[index].quantity + 1}
        }
        else {
            cartData.push({productId, size, quantity: 1})
        }
        console.log(cartData)
        setCartItems(cartData) 
    }


    function getCartCount(){
    let totalCount = 0

    for (let i = 0; i < cartItems.length; i++) {
      totalCount += cartItems[i].quantity
    }

    return totalCount
    }


    const value = { currency, delivery_fee, products, navigate, search, showSearch, setSearch, setShowSearch, addToCart, getCartCount };

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}