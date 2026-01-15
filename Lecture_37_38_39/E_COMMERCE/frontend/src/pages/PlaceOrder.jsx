import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
// import axios from 'axios'
import { toast } from 'react-toastify'
import '../style/PlaceOrder.css'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  return (
    <form className="place-order" 
    // onSubmit={onSubmitHandler}
    >

      {/* LEFT */}
      <div className="left">
        <div className='heading'>
        <Title text1="DELIVERY" text2="INFORMATION" />
        </div>

        <div className="row">
          <input name="firstName" placeholder="First name" value={formData.firstName} onChange={(e)=>{setFormData({...formData, firstName: e.target.value})}} />
          <input name="lastName" placeholder="Last name" value={formData.lastName} onChange={(e)=>{setFormData({...formData, lastName: e.target.value})}} />
        </div>

        <input name="email" placeholder="Email" value={formData.email} onChange={(e)=>{setFormData({...formData, email: e.target.value})}} />
        <input name="street" placeholder="Street" value={formData.street} onChange={(e)=>{setFormData({...formData, street: e.target.value})}} />

        <div className="row">
          <input name="city" placeholder="City" value={formData.city} onChange={(e)=>{setFormData({...formData, city: e.target.value})}} />
          <input name="state" placeholder="State" value={formData.state} onChange={(e)=>{setFormData({...formData, state: e.target.value})} } />
        </div>

        <div className="row">
          <input name="zipcode" placeholder="Zipcode" value={formData.zipcode} onChange={(e)=>{setFormData({...formData, zipcode: e.target.value})}} />
          <input name="country" placeholder="Country" value={formData.country} onChange={(e)=>{setFormData({...formData, country: e.target.value})}} />
        </div>

        <input name="phone" placeholder="Phone" value={formData.phone} onChange={(e)=>{setFormData({...formData, phone: e.target.value})}} />
      </div>

      {/* RIGHT */}
      <div className="right">
        <CartTotal />

         <div className='heading-2'>
        <Title text1="PAYMENT" text2="METHOD" />
        </div>

        <div className="payment-methods">
          <div onClick={() => setMethod('stripe')} className="payment-box">
            <span className={method === 'stripe' ? 'active' : ''}></span>
            <img src={assets.stripe_logo} alt="" />
          </div>

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