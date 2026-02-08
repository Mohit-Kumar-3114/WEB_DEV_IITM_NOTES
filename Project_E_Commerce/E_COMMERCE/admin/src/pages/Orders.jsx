import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import '../style/Orders.css'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return

    try {
      const response = await fetch(`${backendUrl}/api/v1/all-orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })

      const result = await response.json()

      if (response.ok) {
        setOrders(result.data || [])
        console.log('Orders:', result.data)
      } else {
        toast.error(result.message || 'Failed to fetch orders')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (orderId, status) => {
    try {
      const response = await fetch(`${backendUrl}/api/v1/update-order-status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ orderId, status }),
      })

      const result = await response.json()

      if (response.ok) {
        const updatedOrders = orders.map((order) =>
          order._id === orderId ? { ...order, status } : order
        )
        setOrders(updatedOrders)
        toast.success('Order status updated successfully')
      } else {
        toast.error(result.message || 'Failed to update order status')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className="orders">

      {orders.length === 0 && <p>No orders found</p>}

      <div className="orders-container">
        {orders.map((order, index) => (
          <div className="order-card" key={order._id || index}>
            <img
              className="order-icon"
              src={assets.parcel_icon}
              alt="parcel"
            />

            <div className="order-details">
              <div className="items">
                {order.items.map((item, i) => (
                  <p className="item-line" key={i}>
                    {item.product?.name} - {item.size} x {item.quantity}
                  </p>
                ))}
              </div>
              <p>{order.address}</p>
            </div>

            <div className="order-meta">
              <p>Items : {order.items.length}</p>
              <p>Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
              <p>
                Date :{' '}
                {order.date
                  ? new Date(order.date).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>
            <p className="amount">
              {currency}
              {order.amount}
            </p>
            <select
              className="status-select"
              value={order.status}
              onChange={(e) => statusHandler(order._id, e.target.value)}
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
