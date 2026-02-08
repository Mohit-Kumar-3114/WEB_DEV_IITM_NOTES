import { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import '../style/PlaceOrder.css'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee } = useContext(ShopContext)

  const [formData, setFormData] = useState({
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })


  // function initiateRazorpay(order){
  //   const options = {
  //     key: import.meta.env.VITE_RAZORPAY_KEY_SECRET,
  //     amount: order.amount,
  //     currency: "INR",
  //     name: "Order Payment",
  //     description: "Order Payment",
  //     order_id: order.id,
  //     receipt: order.receipt,
  //     handler: async(response)=>{
  //       try{
  //         const res = await fetch(`${backendUrl}/api/v1/verify-razorpay`,{
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: token
  //           },
  //           body: JSON.stringify({userId: localStorage.getItem("userId"), razorpay_order_id: response.razorpay_order_id })
  //         })

  //         const result = await res.json()
  //         if(res.ok){
  //           setCartItems([])
  //           navigate("/orders")
  //         }
  //         else{
  //           toast.error(result.message)
  //         }
  //       }
  //       catch(error){
  //         toast.error(error)
  //       }
  //     }
  //   }
  //    const rzp = new Razorpay(options);
  //    console.log(rzp)
  //    rzp.open();
  // }


  async function onSubmitHandler(e){
    e.preventDefault()
    if(!token){
      toast.error("Please login to place order")
      navigate('/login')
      return
    }

    if(cartItems.length === 0){
      toast.error("Your cart is empty")
      return
    }

    if(method === 'cod'){

    try{
      const address = `${formData.street}, ${formData.city}, ${formData.state} - ${formData.zipcode}, ${formData.country}`
      const response = await fetch (`${backendUrl}/api/v1/place-order-by-cod`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        body: JSON.stringify({ userId: localStorage.getItem("userId"), address, items: cartItems, amount: getCartAmount() + delivery_fee })
      })

      const result = await response.json()

      if(response.ok){
        toast.success("Order placed successfully")
        setCartItems([])
        navigate('/orders')
      }
      else{
        toast.error(result.message)
      }
    }
    catch(error){
      toast.error("Error placing order")
    }
  }

  else if(method === 'razorpay'){
      toast.error("Razorpay payment method is currently unavailable. Please choose Cash on Delivery.")
  }

  // else if(method === 'razorpay'){
  //    try{
  //     const address = `${formData.street}, ${formData.city}, ${formData.state} - ${formData.zipcode}, ${formData.country}`
  //     const response = await fetch (`${backendUrl}/api/v1/place-order-by-razorpay`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: token
  //       },
  //       body: JSON.stringify({ userId: localStorage.getItem("userId"), address, items: cartItems, amount: getCartAmount() + delivery_fee })
  //     })

  //     const result = await response.json()

  //     if(response.ok){
  //       initiateRazorpay(result.order)
  //     }
  //     else{
  //       console.log(error)
  //       toast.error(result.message)
  //     }
  //   }
  //   catch(error){
  //     console.log(error)
  //     toast.error("Error placing order")
  //   }

  // }
}

  return (
    <form className="place-order" onSubmit={onSubmitHandler}>
      <div className="left">
        <div className='heading'>
        <Title text1="DELIVERY" text2="INFORMATION" />
        </div>

        <input name="email" placeholder="Email" value={formData.email} onChange={(e)=>{setFormData({...formData, email: e.target.value})}} />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={(e)=>{setFormData({...formData, phone: e.target.value})}} />
        <input name="street" placeholder="Street" value={formData.street} onChange={(e)=>{setFormData({...formData, street: e.target.value})}} />

        <div className="row">
          <input name="city" placeholder="City" value={formData.city} onChange={(e)=>{setFormData({...formData, city: e.target.value})}} />
          <input name="state" placeholder="State" value={formData.state} onChange={(e)=>{setFormData({...formData, state: e.target.value})} } />
        </div>

        <div className="row">
          <input name="zipcode" placeholder="Zipcode" value={formData.zipcode} onChange={(e)=>{setFormData({...formData, zipcode: e.target.value})}} />
          <input name="country" placeholder="Country" value={formData.country} onChange={(e)=>{setFormData({...formData, country: e.target.value})}} />
        </div>

       </div>

      {/* RIGHT */}
      <div className="right">
        <CartTotal />

         <div className='heading-2'>
        <Title text1="PAYMENT" text2="METHOD" />
        </div>

        <div className="payment-methods">
          <div onClick={() => setMethod('razorpay')} className="payment-box">
            <span className={method === 'razorpay' ? 'active' : ''}></span>
            <img src={assets.razorpay_logo} alt="" />
          </div>

          <div onClick={() => setMethod('cod')} className="payment-box">
            <span className={method === 'cod' ? 'active' : ''}></span>
            <p>CASH ON DELIVERY</p>
          </div>
        </div>
         <div className="order-btn-container">
           <button className="order-btn">PLACE ORDER</button> 
         </div>
      </div>
    </form>
  )
}

export default PlaceOrder

